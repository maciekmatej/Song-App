<template>
  <main>
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
        style="background-image: url(../assets/img/song-header.png)">
      </div>
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button @click.prevent="newSong(song)" type="button"
        class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full
          focus:outline-none">
          <i class="fas" :class="{'fa-pause': playing, 'fa-play': !playing}"></i>
        </button>
        <div class="z-50 text-left ml-8">
          <!-- Song Info -->
          <div class="text-3xl font-bold">{{ song.modified_name }}</div>
          <div>{{ song.genre }}</div>
        </div>
      </div>
    </section>
    <!-- Form -->
    <section  class="container mx-auto mt-6" id="comments">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <!-- Comment Count -->
          <span class="card-title">Comments ({{ song.comment_count }})</span>
          <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
            <div class="text-white text-center font-bold p-4 mb-4"
            :class="comment_alert_variant"
            v-if="comment_show_alert">
              {{ comment_alert_message }}
            </div>
          <vee-form @submit="addComment"
          :validation-schema="schema"
          v-show="userLoggedIn">
            <vee-field as="textarea" name="comment"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."></vee-field>
              <error-message class="text-red-600" name="comment" />
            <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600 block"
            :disabled="comment_in_submission">
              Submit
            </button>
          </vee-form>
          <!-- Sort Comments -->
          <select v-model="sort"
            class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded">
            <option value="1">Latest</option>
            <option value="2">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <ul class="container mx-auto">
        <comment-item v-for="comment in sortedComments" :key="comment.docID"
        :comment="comment"/>
    </ul>
  </main>
</template>

<script>
import {
  getDoc, getDocs, query, where, doc, addDoc, updateDoc,
} from 'firebase/firestore';
import { mapState, mapGetters } from 'vuex';
import { db, auth, commentsCollection } from '@/includes/firebase';
import CommentItem from '../components/Comment.vue';

export default {
  name: 'Song',
  data() {
    return {
      song: {},
      comments: [],
      sort: '1',
      schema: {
        comment: 'required|min:3',
      },
      comment_in_submission: false,
      comment_show_alert: false,
      comment_alert_variant: 'bg-blue-500',
      comment_alert_message: 'Please wait! Your comment is being submited',
    };
  },
  components: { CommentItem },
  methods: {
    // ...mapActions(['newSong']),
    async newSong(song) {
      await this.$store.dispatch('newSong', song);
      await this.$store.dispatch('toggleAudio', song);
    },
    async addComment(values, { resetForm }) {
      this.comment_in_submission = true;
      this.comment_show_alert = true;
      this.comment_alert_variant = 'bg-blue-500';
      this.comment_alert_message = 'Please wait! Your comment is being submited';

      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        songID: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      };
      await addDoc(commentsCollection, comment);

      this.song.comment_count += 1;
      const songDocRef = await doc(db, 'songs', this.$route.params.id);
      await updateDoc(songDocRef, {
        comment_count: this.song.comment_count,
      });

      await this.getComments();

      this.comment_in_submission = false;
      this.comment_alert_variant = 'bg-green-500';
      this.comment_alert_message = 'Comment added!';

      resetForm();
      setTimeout(() => {
        this.comment_show_alert = false;
      }, 1500);
    },
    async getComments() {
      const commentsQuery = await query(commentsCollection, where('songID', '==', this.$route.params.id));
      const snapshots = await getDocs(commentsQuery);

      this.comments = [];

      snapshots.forEach((document) => {
        this.comments.push({
          ...document.data(),
          docID: document.id,
        });
      });
    },
  },
  computed: {
    ...mapState(['userLoggedIn']),
    ...mapGetters(['playing']),
    sortedComments() {
      return this.comments.slice().sort((a, b) => {
        if (this.sort === '1') {
          return new Date(b.datePosted) - new Date(a.datePosted);
        }
        return new Date(a.datePosted) - new Date(b.datePosted);
      });
    },
  },
  async created() {
    const songDocRef = await doc(db, 'songs', this.$route.params.id);
    const docSnapshot = await getDoc(songDocRef);

    if (!docSnapshot.exists()) {
      this.$router.push({ name: 'home' });
      return;
    }

    const { sort } = this.$route.query;

    this.sort = sort === '1' || sort === '2' ? sort : '1';

    this.song = docSnapshot.data();
    this.getComments();
  },
  watch: {
    sort(newVal) {
      if (newVal === this.$route.query.sort) {
        return;
      }
      this.$router.push({
        query: {
          sort: newVal,
        },
      });
    },
  },
};
</script>

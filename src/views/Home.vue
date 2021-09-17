<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png); background-repeat-y: no-repeat;
      background-size: cover">
      </div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
            dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
            suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
            pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
          v-icon.right="'headphones-alt'">
          <span class="card-title">Songs</span>
          <!-- Icon -->

        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <app-song-item v-for="song in songs" :key="song.docID"
          :song="song" />
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>

<!-- <video id="bg-video" autoplay loop muted>
        <source src="assets/video/bg-video.mp4" type="video/mp4">
    </video> -->
    <!-- video bacground setting -->
<script>
import {
  getDocs, getDoc, limit, query, startAfter, doc, orderBy,
} from 'firebase/firestore';
import {
  songsCollection, db,
} from '@/includes/firebase';
import AppSongItem from '../components/SongItem.vue';

export default {
  name: 'home',
  data() {
    return {
      songs: [],
      maxPerPage: 10,
      pendingRequest: false,
    };
  },
  components: { AppSongItem },
  async created() {
    this.getSongs();

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

      if (bottomOfWindow) {
        this.getSongs();
      }
    },
    async getSongs() {
      if (this.pendingRequest) {
        return;
      }

      this.pendingRequest = true;

      let snapshots;

      if (this.songs.length) {
        const lastDocRef = await doc(db, 'songs', this.songs[this.songs.length - 1].docID);
        const lastVisible = await getDoc(lastDocRef);
        const q = await query(
          songsCollection, limit(this.maxPerPage), orderBy('modified_name'), startAfter(lastVisible),
        );
        snapshots = await getDocs(q);
      } else {
        const q = await query(songsCollection, limit(this.maxPerPage), orderBy('modified_name'));
        snapshots = await getDocs(q);
      }

      snapshots.forEach((document) => {
        this.songs.push({
          docID: document.id,
          ...document.data(),
        });
      });

      this.pendingRequest = false;
    },
  },
};
</script>

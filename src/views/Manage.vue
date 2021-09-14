<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
          <app-upload :addSong="addSong"/>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                <span class="card-title">My Songs</span>
                <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
            </div>
            <div class="p-6">
                <!-- Composition Items -->
              <composition-item v-for="(song, index) in songs" :key="song.docID"
              :song="song" :index="index" :updateSong="updateSong"
              :removeSong="removeSong" :updateUnsavedFlag="updateUnsavedFlag"/>
            </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
// import store from '@/store';

import {
  query, where, getDocs, orderBy,
} from 'firebase/firestore';
import AppUpload from '../components/Upload.vue';
import CompositionItem from '../components/CompositionItem.vue';
import { auth, songsCollection } from '@/includes/firebase';

export default {
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  name: 'manage',
  components: { AppUpload, CompositionItem },
  methods: {
    updateSong(index, values) {
      this.songs[index].modified_name = values.modified_name;
      this.songs[index].genre = values.genre;
    },
    removeSong(index) {
      this.songs.splice(index, 1);
    },
    addSong(doc) {
      const song = {
        ...doc.data(),
        docID: doc.id,
      };
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },
  },
  async created() {
    const q = await query(songsCollection, where('uid', '==', auth.currentUser.uid), orderBy('modified_name'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(this.addSong);
    console.log(this.songs);
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next();
    } else {
      // eslint-disable-next-line no-alert, no-restricted-globals
      const leave = confirm('You have unsaved changes. Do you want to leave ?');
      console.log(leave);
      next(leave);
    }
  },
//   beforeRouteEnter(to, from, next) {
//     if (store.state.userLoggedIn) {
//       next();
//     } else {
//       next({ name: 'home' });
//       store.commit('toggleAuthModal');
//     }
//   },
};
</script>

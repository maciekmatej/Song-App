import { createStore } from 'vuex';
import {
  createUserWithEmailAndPassword, signOut,
  updateProfile, signInWithEmailAndPassword,
} from 'firebase/auth';
import { Howl } from 'howler';
import {
  auth, setDoc, db, doc,
} from '@/includes/firebase';
import helper from '@/includes/helper';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
    currentSong: {},
    sound: {},
    seek: '00:00',
    duration: '00:00',
    playerProgress: '0%',
  },
  mutations: {
    toggleAuthModal(state) {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
    newSong(state, payload) {
      if (state.sound.playing) {
        state.sound.stop();
        state.sound.unload();
        state.sound = null;
      }
      state.currentSong = payload;
      state.sound = new Howl({
        src: [payload.url],
        html5: true,
      });
      console.log(state.currentSong);
    },
    updatePosition(state) {
      state.seek = helper.formatTime(state.sound.seek());
      state.duration = helper.formatTime(state.sound.duration());
      state.playerProgress = `${(state.sound.seek() / state.sound.duration()) * 100}% `;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,  <= use mapGetters inside computed property
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing();
      }
      return false;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await createUserWithEmailAndPassword(
        auth, payload.email, payload.password,
      );

      await setDoc(doc(db, 'users', userCred.user.uid), {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
        user_type: payload.user_type,
      });

      await updateProfile(auth.currentUser, {
        displayName: payload.name,
      });
      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
    async login({ commit }, payload) {
      await signInWithEmailAndPassword(auth, payload.email, payload.password);
      commit('toggleAuth');
    },
    async signOut({ commit }) {
      await signOut(auth);
      commit('toggleAuth');
    },
    async succesLog({ commit }) {
      setTimeout(() => {
        commit('toggleAuthModal');
      }, 2000);
    },
    async newSong({ commit, state, dispatch }, payload) {
      if (state.currentSong === payload) {
        return;
      }
      commit('newSong', payload);

      // state.sound.play();

      state.sound.on('play', () => {
        requestAnimationFrame(() => {
          dispatch('progress');
        });
      });
    },
    async toggleAudio({ state }) {
      if (!state.sound.playing) {
        return;
      }
      if (state.sound.playing()) {
        state.sound.pause();
      } else {
        state.sound.play();
      }
    },
    progress({ commit, state, dispatch }) {
      commit('updatePosition');

      if (state.sound.playing()) {
        requestAnimationFrame(() => {
          dispatch('progress');
        });
      }
    },
    updateSeek({ state, dispatch }, payload) {
      if (!state.sound.playing) {
        return;
      }

      const { x, width } = payload.currentTarget.getBoundingClientRect();
      const clickX = payload.clientX - x;
      const percentage = clickX / width;
      const seconds = state.sound.duration() * percentage;

      state.sound.seek(seconds);

      state.sound.once('seek', () => {
        dispatch('progress');
      });
    },

  },
});

<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-between items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4"
      :to="{ name: 'home' }" exact-active-class="no-active">
        Music
      </router-link>

      <div class="flex items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }">About</router-link>
          </li>
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white"
            href="#" @click.prevent="toggleAuthModal">
                Log in
            </a>
          </li>
          <template v-else>
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'manage' }">Manage</router-link>
          </li>
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="signOut">
                Log out
            </a>
          </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapMutations(['toggleAuthModal']),
    // toggleAuthModal() {
    //   this.$store.commit('toggleAuthModal');
    // },
    // ...mapActions(['signOut']),
    signOut() {
      this.$store.dispatch('signOut');
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' });
      }
    },
  },
  computed: {
    ...mapState(['userLoggedIn']),

  },
};
</script>

<style>

</style>

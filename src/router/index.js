import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';
import Song from '@/views/Song.vue';
import store from '@/store';

const routes = [
  {
    name: 'home',
    path: '/', // example.com/
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'manage',
    // alias: '/manage-music', // one way of redairectin to the new url, below is the second option
    path: '/manage',
    meta: {
      requiresAuth: true,
    },
    component: Manage,
    // eslint-disable-next-line max-len
    beforeEnter: (to, from, next) => { // one way of guarding, now it is handled in specific component
      console.log('manage route guard');
      next();
    },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
  {
    path: '/manage-music',
    redirect: { name: 'manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => { // global guard
  console.log(to.matched);

  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
    store.commit('toggleAuthModal');
  }
});

export default router;

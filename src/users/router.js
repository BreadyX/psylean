import { createRouter, createWebHistory } from 'vue-router';

import Register from '@/users/views/Register.vue';
import Verify from '@/users/views/Verify.vue';

export default createRouter({
  history: createWebHistory('/users'),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { title: 'Registrati' }
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify,
      meta: { title: 'Verifica account' }
    }
  ]
});

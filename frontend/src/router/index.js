import { createRouter, createWebHistory } from 'vue-router';

import Signin from '@/views/Signin.vue';
import Guest from '@/views/signin/Guest.vue';
import Login from '@/views/signin/Login.vue';
import Signup from '@/views/signin/Signup.vue';

const routes = [
  {
    path: '/signin',
    name: 'signin',
    redirect: { name: 'signinGuest' },
    component: Signin,
    meta: {
      title: 'Accesso'
    },
    children: [
      {
        path: 'guest',
        name: 'signinGuest',
        component: Guest
      },
      {
        path: 'login',
        name: 'signinLogin',
        component: Login
      },
      {
        path: 'signup',
        name: 'signinSignup',
        component: Signup
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';
import App from '@/views/App.vue';
import Signin from '@/views/Signin.vue';
import Guest from '@/views/signin/Guest.vue';
import Login from '@/views/signin/Login.vue';
import Signup from '@/views/signin/Signup.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
    meta: {
      title: 'Errore'
    }
  },
  {
    path: '/about/:section?',
    name: 'home',
    alias: '/',
    component: Home
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
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

import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';
import App from '@/views/App.vue';
import Calendar from '@/views/app/Calendar.vue';
import Month from '@/views/app/calendar/Month.vue';
import Signin from '@/views/Signin.vue';
import Guest from '@/views/signin/Guest.vue';
import Login from '@/views/signin/Login.vue';
import Signup from '@/views/signin/Signup.vue';

export const routes = [
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
    redirect: { name: 'calendar' },
    component: App,
    children: [
      {
        path: 'calendar',
        name: 'calendar',
        component: Calendar,
        redirect: { name: 'monthView' },
        meta: {
          tite: 'Calendario'
        },
        children: [
          {
            path: 'month',
            name: 'monthView',
            component: Month
          }
        ]
      }
    ]
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

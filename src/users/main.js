import { createApp } from 'vue';
import router from '@/users/router';
import App from '@/users/App.vue';

createApp(App).use(router).mount('#app');

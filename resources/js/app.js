import './bootstrap';
import { createApp } from 'vue'; // Importing createApp correctly
import { createPinia } from 'pinia';
import { apiInstance } from "./api-instance.js";
import App from './App.vue';
import { router } from './router';
import toast from "vue-toastification";

const app = createApp(App);

const pinia = createPinia();

app.config.globalProperties.$api = apiInstance;

app.use(pinia)
    .use(router)
    .mount('#app');

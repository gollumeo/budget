import './bootstrap';
import { createApp } from 'vue'; // Importing createApp correctly
import { createPinia } from 'pinia';
import { apiInstance } from "./api-instance.js";
import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia)
    .use(apiInstance)
    .mount('#app');

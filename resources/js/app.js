import './bootstrap';
import { createApp } from 'vue'; // Importing createApp correctly
import { createPinia } from 'pinia';
import { apiInstance } from "./api-instance.js";

const app = createApp();

const pinia = createPinia();

app.use(pinia)
    .use(apiInstance)
    .mount('#app');

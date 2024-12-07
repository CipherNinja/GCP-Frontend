import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

// Import Bootstrap CSS and JS
import '@/bootstrap/dist/css/bootstrap.min.css';
import '@/bootstrap/dist/js/bootstrap.bundle.min.js';

// Create and mount the Vue app
createApp(App)
  .use(router) // Use the router in the app
  .mount('#app');

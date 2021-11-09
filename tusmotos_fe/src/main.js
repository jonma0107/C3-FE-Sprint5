import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

createApp(App).use(router).mount('#app')

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});

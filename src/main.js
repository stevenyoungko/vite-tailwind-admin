import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from "~pages";
import App from './App.vue'
import './styles/index.css'
import Notifications from '@kyvg/vue3-notification'


const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(Notifications)
  .mount('#app')

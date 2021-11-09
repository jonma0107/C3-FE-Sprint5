import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Tienda from './components/Tienda.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/signup',
    name: "SignUp",
    component: SignUp
  },
  {
    path: '/home',
    name: "Home",
    component: Home
 },
 {
    path: '/tienda',
    name: "Tienda",
    component: Tienda
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Room from '../pages/Room.vue'
import About from '../pages/About.vue'
import Location from '../pages/Location.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/room', component: Room },
  { path: '/about', component: About },
  { path: '/location', component: Location },
]

export const router = createRouter({
  history: createWebHistory('/booking-hostel/'),
  routes,
})

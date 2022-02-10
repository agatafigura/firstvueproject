import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Service from '../views/Service.vue'

const routes = [
  {
    path: '/firstvueproject',
    name: 'Home',
    component: Home
  },
  {
    path: '/firstvueproject/about',
    name: 'About',
    component: About
  },
  {
    path: '/firstvueproject/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/firstvueproject/service',
    name: 'Service',
    component: Service
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

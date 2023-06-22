import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import Chatbox from '@/views/Chatbox.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chatbox
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router

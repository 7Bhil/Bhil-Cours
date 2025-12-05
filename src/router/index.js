import { createRouter, createWebHashHistory } from 'vue-router'

// Import dynamique des composants
const HomeView = () => import('../views/HomeView.vue')
const LanguagesView = () => import('../views/LanguagesView.vue')
const WebView = () => import('../views/WebView.vue')
const CybersecurityView = () => import('../views/CybersecurityView.vue')
const ContactView = () => import('../views/ContactView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/langages',
    name: 'langages',
    component: LanguagesView
  },
  {
    path: '/web',
    name: 'web',
    component: WebView
  },
  {
    path: '/cybersecurite',
    name: 'cybersecurite',
    component: CybersecurityView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
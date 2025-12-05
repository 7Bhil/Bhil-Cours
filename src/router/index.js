import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const LanguagesView = () => import('../views/LanguagesView.vue')
const WebView = () => import('../views/WebView.vue')
const CybersecurityView = () => import('../views/CybersecurityView.vue')
const ContactView = () => import('../views/ContactView.vue')
// Ajoutez ces imports pour les pages détaillées
const TechnologyView = () => import('../views/TechnologyView.vue')

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
    // Page détaillée pour chaque langage
    path: '/langages/:tech',
    name: 'technology',
    component: TechnologyView,
    props: true
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
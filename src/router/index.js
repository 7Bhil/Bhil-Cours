import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const LanguagesView = () => import('../views/LanguagesView.vue')
const WebView = () => import('../views/WebView.vue')
const CybersecurityView = () => import('../views/CybersecurityView.vue')
const ContactView = () => import('../views/ContactView.vue')
// Ajoutez ces imports pour les pages détaillées
const TechnologyView = () => import('../views/TechnologyView.vue')
const Js = () => import('../views/JavaScript.vue')
const Java = () => import('../views/Java.vue')
const Javatest = () => import('../views/Javatest.vue')
/*const Python = () => import('../views/Python.vue')
const Cpp = () => import('../views/Cpp.vue')
const Ruby = () => import('../views/Ruby.vue')
const Php = () => import('../views/Php.vue')*/
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
    path: '/javascript',
    name: 'javascript',
    component: Js
  },
  {
    path: '/java',
    name: 'java',
    component: Java
  },
  {
    path: '/javatest',
    name: 'javatest',
    component: Javatest
  },/*
  {
    path: '/python',
    name: 'python',
    component: Python
  },
  {
    path: '/cpp',
    name: 'cpp',
    component: Cpp
  },
  {
    path: '/ruby',
    name: 'ruby',
    component: Ruby
  },
  {
    path: '/php',
    name: 'php',
    component: Php
  },*/
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
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
export default router
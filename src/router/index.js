import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/AView',
    name: 'AView',

    component: () => import('../views/AView.vue')
  },
  {
    path: '/BView',
    name: 'BView',

    component: () => import('../views/BView.vue')
  },
    {
    path: '/CView',
    name: 'CView',
    component: () => import('../views/CView.vue')
  },
    {
    path: '/DView',
    name: 'DView',
    component: () => import('../views/DView.vue')
  },
    {
    path: '/EView',
    name: 'EView',
    component: () => import('../views/EView.vue')
  },
    {
    path: '/FView',
    name: 'FView',
    component: () => import('../views/FView.vue')
  },
  {
    path: '/GView',
    name: 'GView',
    component: () => import('../views/GView.vue')
  },
  {
    path: '/HView',
    name: 'HView',
    component: () => import('../views/HView.vue')
  },
  {
    path: '/IView',
    name: 'IView',
    component: () => import('../views/IView.vue')
  },
  {
    path: '/JView',
    name: 'JView',
    component: () => import('../views/JView.vue')
  },
  {
    path: '/KView',
    name: 'KView',
    component: () => import('../views/KView.vue')
  },
  {
    path: '/LView',
    name: 'LView',
    component: () => import('../views/LView.vue')
  },
  {
    path: '/MView',
    name: 'MView',
    component: () => import('../views/MView.vue')
  },
  {
    path: '/NView',
    name: 'NView',
    component: () => import('../views/NView.vue')
  },
  {
    path: '/OView',
    name: 'OView',
    component: () => import('../views/OView.vue')
  },
  {
    path: '/PView',
    name: 'PView',
    component: () => import('../views/PView.vue')
  },
  {
    path: '/QView',
    name: 'QView',
    component: () => import('../views/QView.vue')
  },
  {
    path: '/RView',
    name: 'RView',
    component: () => import('../views/RView.vue')
  },
    {
    path: '/SSView',
    name: 'SSView',
    component: () => import('../views/SSView.vue')
  },
  {
    path: '/SView',
    name: 'SView',
    component: () => import('../views/SView.vue')
  },
  {
    path: '/TView',
    name: 'TView',
    component: () => import('../views/TView.vue')
  },
  {
    path: '/UView',
    name: 'UView',
    component: () => import('../views/UView.vue')
  },
  {
    path: '/VView',
    name: 'View',
    component: () => import('../views/VView.vue')
  },
  {
    path: '/WView',
    name: 'WView',
    component: () => import('../views/WView.vue')
  },
  {
    path: '/XView',
    name: 'XView',
    component: () => import('../views/XView.vue')
  },
  {
    path: '/YView',
    name: 'YView',
    component: () => import('../views/YView.vue')
  },
  {
    path: '/ZView',
    name: 'ZView',
    component: () => import('../views/ZView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import servicioSocial from '@/views/servicios/servicioSocial.vue'

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicio-social',
      name: 'about',
      component: servicioSocial
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: HomeView
    },
    {
      path: '/laboratorios-medicos',
      name: 'laboratorios-medicos',
      component: HomeView
    },
    {
      path: '/actividades-culturales',
      name: 'actividades-culturales',
      component: HomeView
    },
    {
      path: '/practicas-profesionales',
      name: 'practicas-profesionales',
      component: HomeView
    },
    {
      path: '/control-escolar',
      name: 'control-escolar',
      component: HomeView
    },
    {
      path: '/becas-intercambios',
      name: 'becas-intercambios',
      component: HomeView
    },
    {
      path: '/tecnologias-aprendizaje',
      name: 'tecnologias-aprendizaje',
      component: HomeView
    },
    {
      path: '/centro-idiomas',
      name: 'centro-idiomas',
      component: HomeView
    },
    {
      path: '/divtic',
      name: 'divtic',
      component: HomeView
    },
    {
      path: '/laboratorios',
      name: 'laboratorios',
      component: HomeView
    },
    {
      path: '/egresados',
      name: 'egresados',
      component: HomeView
    },
    {
      path: '/cucei',
      name: 'cucei',
      component: HomeView
    },
  ]
})

export default router

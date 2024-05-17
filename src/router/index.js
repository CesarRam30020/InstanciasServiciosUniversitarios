import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import servicioSocial from '@/views/servicios/servicioSocial.vue'
import bibliotecaVue from '@/views/servicios/bibliotecaVue.vue'
import laboratoriosMedicos from '@/views/servicios/laboratoriosMedicos.vue'
import culturalDeportivo from '@/views/servicios/culturalDeportivo.vue'
import vinculacionPracticas from '@/views/servicios/vinculacionPracticas.vue'
import controlEscolar from '@/views/servicios/controlEscolar.vue'
import becasIntercambios from '@/views/servicios/becasIntercambios.vue'
import coordinacionTectnologias from '@/views/servicios/coordinacionTectnologias.vue'
import centroIdiomas from '@/views/servicios/centroIdiomas.vue'
import divtic from '@/views/servicios/divtic.vue'
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
      component: bibliotecaVue
    },
    {
      path: '/laboratorios-medicos',
      name: 'laboratorios-medicos',
      component: laboratoriosMedicos
    },
    {
      path: '/actividades-culturales',
      name: 'actividades-culturales',
      component: culturalDeportivo
    },
    {
      path: '/practicas-profesionales',
      name: 'practicas-profesionales',
      component: vinculacionPracticas
    },
    {
      path: '/control-escolar',
      name: 'control-escolar',
      component: controlEscolar
    },
    {
      path: '/becas-intercambios',
      name: 'becas-intercambios',
      component: becasIntercambios
    },
    {
      path: '/tecnologias-aprendizaje',
      name: 'tecnologias-aprendizaje',
      component: coordinacionTectnologias
    },
    {
      path: '/centro-idiomas',
      name: 'centro-idiomas',
      component: centroIdiomas
    },
    {
      path: '/divtic',
      name: 'divtic',
      component: divtic
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

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import Registro from '@/pages/dashboard/registro.vue'
import Matricula from '@/pages/dashboard/matricula.vue'
// Importación del nuevo componente de profesores
import RegistroProfesores from '@/pages/dashboard/registroprofesores.vue'
import CrearUsuario from '@/pages/dashboard/crearusuario.vue' 
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Inicio' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [

      { 
        path: 'registro', 
        component: Registro 
      },
      { 
        path: 'matricula', 
        component: Matricula
      },
      { 
        path: 'registroprofesores', // <--- Integración del Registro de Profesores
        component: RegistroProfesores 
      }, 
     { 
        path: 'crearusuario', // La URL será /dashboard/crearusuario
        component: CrearUsuario 
      }, 
    ]
  },
]

// 1. CREACIÓN DEL OBJETO ROUTER (DEBE SER ANTES DE beforeEach)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard global
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Mi App'
  
  // Usamos 'router' aquí, lo cual es correcto porque ya fue definido arriba.
  if (to.meta.requiresAuth) {
    const isAuthenticated = false
    if (!isAuthenticated) {
      alert('Debes iniciar sesión')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
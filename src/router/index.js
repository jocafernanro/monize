import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../components/NotFound'
import Login from '../views/auth/Login.vue'

const fb = require('../firebaseConfig')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/legal',
    name: 'Legal',
    component: () => import(/* webpackChunkName: "legal" */ '../views/Legal.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/admin/Admin.vue')
  },
  {
    path: '/admin/products/create',
    name: 'CreateProduct',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/admin/CreateProduct.vue')
  },
  {
    path: '/not-found',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router

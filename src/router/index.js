import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
  component: Home
  },
  {
    path: '/profile',
    name: "Profile",
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile.vue')
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
    path: '/partnerWithUs',
    name:'Partner',
    component: () => import(/* webpackChunkName: "partnerWithUs" */ '../views/partner.vue')
    
  },
  {
    path: '/contact',
    name:'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact.vue')
    
  }
]

const router = new VueRouter({
  routes
})

export default router

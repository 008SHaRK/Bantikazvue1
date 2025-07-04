import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue' 
import Profile from '../views/Profile.vue'
import Shop from '../views/Shop.vue'
import ProductDetails from '../views/ProductDetails.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
   {
 path: '/product-details/:id',
  name: 'ProductDetails',
 component: () => import('../views/ProductDetails.vue'), 

},

     { path: '/profile', component: Profile },

        {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

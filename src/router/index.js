import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/Index.vue'
import ResetView from '../views/ResetpassView.vue'
import ProfileView from '../views/ProfileView.vue'
import PolicyView from '../views/Policy.vue'
import store from "../store"
import NewpasswordView from '../views/NewPass.vue'
import { jwtVerify } from 'jose';
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: IndexView,
    alias: '/',

  },
  {
    path: '/resetpassword',
    name: 'ResetpassView',
    component: ResetView,
  },
  {
    path: '/policy',
    name: 'Policy',
    component: PolicyView,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: {requiresAuth: true},
  },
  {
    path: '/Newpassword/:token',
    name: 'Newpassword',
    component: NewpasswordView,
    beforeEnter: (to, from, next) => {
        const secretKey = new TextEncoder().encode(
          '8683f24fe13247e9c033618aa577e072e2afdea832bd93d327edf153c039d29e',
        )
        jwtVerify(to.params.token, secretKey)
        .then(decoded => {
          // This code check exp jwt
          // const currentTime = Math.floor(Date.now() / 1000)
          // if(decoded['payload']['exp'] < currentTime){
          //   next("/")
          // }
          // next()
          store.commit('setresponseStatusEmail', decoded['payload']['email'])
          next()
        })
        .catch(err => {
          next("/")
        })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/index");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router

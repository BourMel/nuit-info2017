import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Profil from '../components/Profil.vue'
import Conduite from '../components/Conduite.vue'
import Urgence from '../components/Urgence.vue'
import Trafic from '../components/Trafic.vue'
import Prevention from '../components/Prevention.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/Signup.vue'
import PageNotFound from '../components/PageNotFound.vue'

import Urgence2 from '../components/Urgence/Urgence2.vue'
import Urgence3 from '../components/Urgence/Urgence3.vue'
import Urgence4 from '../components/Urgence/Urgence4.vue'
import Urgence5 from '../components/Urgence/Urgence5.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/conduite',
      name: 'conduite',
      component: Conduite
    },
    {
      path: '/urgence/1',
      name: 'urgence',
      component: Urgence
    },
    {
      path: '/trafic',
      name: 'trafic',
      component: Trafic
    },
    {
      path: '/prevention',
      name: 'prevention',
      component: Prevention
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/urgence/2',
      name: 'urgence2',
      component: Urgence2
    },
    {
      path: '/urgence/3',
      name: 'urgence3',
      component: Urgence3
    },
    {
      path: '/urgence/4',
      name: 'urgence4',
      component: Urgence4
    },
    {
      path: '/urgence/5',
      name: 'urgence5',
      component: Urgence5
    },
    {
      path: '*',
      name: 'page404',
      component: PageNotFound
    }
  ],
  mode: "history"
});

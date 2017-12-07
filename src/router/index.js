import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Profil from '../components/Profil.vue'
import Conduite from '../components/Conduite.vue'
import Urgence from '../components/Urgence.vue'
import Trafic from '../components/Trafic.vue'
import Prevention from '../components/Prevention.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
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
      path: '/urgence',
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
    }
  ]
});

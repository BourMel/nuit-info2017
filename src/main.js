import Vue from 'vue'
import App from './App'
import router from './router'
import { firebaseApp } from './firebaseApp'
import store from './store'


Vue.config.productionTip = false;

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/trafic');
  } else {
    router.replace('/login');
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

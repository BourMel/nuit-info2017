<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul class="sidebar">
      <router-link :to="{ name: 'profil' }" tag="li">Profil</router-link>
      <router-link :to="{ name: 'conduite' }" tag="li">Conduite</router-link>
      <router-link :to="{ name: 'urgence' }" tag="li">Urgence</router-link>
      <router-link :to="{ name: 'trafic' }" tag="li">Trafic</router-link>
      <router-link :to="{ name: 'prevention' }" tag="li">Prévention</router-link>
    </ul>
    <button @click="signOut">Déconnexion</button>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Bienvenue !'
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  justify-content: space-around;
}

.sidebar li {
  cursor: pointer;
}
</style>

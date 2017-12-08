<template>
  <div class="home">
    <h1>{{ msg }}</h1>
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

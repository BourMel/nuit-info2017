<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="sidebar">
      <router-link :to="{ name: 'profil' }" tag="li">Profil</router-link>
      <router-link :to="{ name: 'conduite' }" tag="li">Conduite</router-link>
      <router-link :to="{ name: 'urgence' }" tag="li">Urgence</router-link>
      <router-link :to="{ name: 'trafic' }" tag="li">Trafic</router-link>
      <router-link :to="{ name: 'prevention' }" tag="li">Prévention</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Bienvenue !'
      }
    }
  }
</script>

<style scoped>
.sidebar li {
  cursor: pointer;
}
</style>

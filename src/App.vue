<template>
  <div id="app">
    <router-link :to="{ name: 'home' }" tag="h1" class="app-title">
      Code Ta Route
    </router-link>
    <router-view></router-view>
    <ul class="sidebar">
      <router-link :to="{ name: 'profil' }" tag="li">Profil</router-link>
      <router-link :to="{ name: 'conduite' }" tag="li"><img src="src/assets/icone_conduite.svg"/></router-link>
      <router-link :to="{ name: 'urgence' }" tag="li">Urgence</router-link>
      <router-link :to="{ name: 'trafic' }" tag="li">Trafic</router-link>
      <router-link :to="{ name: 'prevention' }" tag="li">Prévention</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=La+Belle+Aurore|Lato=200+400+700');

*, *:after, *:before {
    box-sizing: border-box;
}
body {
    padding: 0;
    margin: 0;
}
#app {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    background: linear-gradient(135deg, #FFC6B0, #E8835A);
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
}
.app-title {
    width: 100%;
    display: inline-block;
    margin: 0;
    padding-top: 10px;
    position: fixed;
    cursor: pointer;
    font-family: 'La Belle Aurore';
    background-color: #FFF;
    color: #f2a487;
}
ul {
    padding: 0;
    margin: 0;
}
ul li {
    list-style: none;
}
ul li img {
    width: 30px;
}
div:nth-child(2) {
    padding: 70px 0 70px;
}
.sidebar {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF;
    color: #E8835A;
}
</style>

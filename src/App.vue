<template>
  <div id="app">
    <router-link :to="{ name: 'home' }" tag="h1" class="app-title">
      Code Ta Route
    </router-link>
    <router-view></router-view>
    <ul class="sidebar">
      <router-link :to="{ name: 'profil' }" tag="li"><img src="src/assets/icone_profil.svg"/></router-link>
      <router-link :to="{ name: 'conduite' }" tag="li"><img src="src/assets/icone_conduite.svg"/></router-link>
      <router-link :to="{ name: 'urgence' }" tag="li"><img src="src/assets/icone_urgence.svg"/></router-link>
      <router-link :to="{ name: 'trafic' }" tag="li"><img src="src/assets/icone_trafic.svg"/></router-link>
      <router-link :to="{ name: 'prevention' }" tag="li"><img src="src/assets/icone_infos.svg"/></router-link>
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
@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');

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
    background-color: #f09c7a;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
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
    z-index:1;
}
ul {
    padding: 0;
    margin: 0;
}
ul li {
    list-style: none;
}
ul li img {
    width: 25px;
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

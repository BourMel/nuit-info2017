<template>
  <div id="app">
    <router-link :to="{ name: 'home' }" tag="h1" class="app-title">
      Code Ta Route
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=La+Belle+Aurore');
body {
  background: #2980b9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
.app-title {
  cursor: pointer;
  font-family: 'La Belle Aurore';
}
ul {
    padding: 0;
}
ul li {
    list-style: none;
}
</style>

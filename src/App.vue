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
}
</style>

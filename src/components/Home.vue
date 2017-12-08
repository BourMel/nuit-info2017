<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Bienvenue !'
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

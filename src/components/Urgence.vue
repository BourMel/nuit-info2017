<style>
@import url('https://fonts.googleapis.com/css?family=La+Belle+Aurore');


#app {
    background-color: red;
}

.maintext {
    font-weight: 200;
    font-size: 3em;
    text-align: left;
    margin: 180px 0 20px 20px;
}

.sectext {
  text-align: left;
    margin: 0 0 20px 20px;
}

.suivant {
  background-color: white;
  border-radius:10px;
  margin: 100px 20px 0 20px;
  padding: 5px;
  color: #f09c7a;
  font-size: 1em;
  width: 100%;
}

</style>


<template>
  <div>
    <h1>Urgence</h1>

    <p class="maintext">1. Sécurisez les lieux de l'accident</p>
    <ul class="sectext">
      <li>Posez un triangle</li>
      <li>Portez un gilet jaune</li>
      <li>Mettez les passagers de votre véhicule à l'abri</li>
    </ul>

    <router-link :to="{ name: 'urgence2' }" tag="h1" class="suivant">
      Suivant
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'urgence',
}
</script>

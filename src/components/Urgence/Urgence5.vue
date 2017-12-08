<style>
.maintext {
    font-weight: 200;
    font-size: 3em;
    text-align: left;
    margin: 180px 0 20px 20px;
}


.precedent {
  background-color: white;
  border-radius:10px;
  margin: 100px 20px 0 20px;
  padding: 5px;
  color: #f09c7a;
  font-size: 1em;
}

.nav {
  display: flex;
}
</style>

<template>
  <div class="urgence">
    <h1>Urgence</h1>

    <p class="maintext">5. Prévenez les secours</p>

    <ul class="sectext">
      <li><a href="tel:15">SAMU</a></li>
      <li><a href="tel:18">Pompiers</a></li>
      <li><a href="tel:17">Police</a></li>
      <li><a href="tel:112">Numéro d'urgence européen</a></li>
    </ul>

    <div class="nav">
    <router-link :to="{ name: 'urgence4' }" tag="h1" class="precedent">
      Précédent
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'urgence5',
}
</script>

<style>
.maintext {
    font-weight: 200;
    font-size: 3em;
    text-align: left;
    margin: 180px 0 20px 20px;
}

.suivant,
.precedent {
  width: 50%;
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

    <p class="maintext">4. Déterminez le nombre et l'état des victimes</p>

    <div class="nav">
    <router-link :to="{ name: 'urgence3' }" tag="h1" class="precedent">
      Précédent
    </router-link>
    <router-link :to="{ name: 'urgence5' }" tag="h1" class="suivant">
      Suivant
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'urgence4',
}
</script>

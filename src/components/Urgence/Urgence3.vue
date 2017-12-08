<template>
  <div class="urgence">
    <h1>Urgence</h1>

    <p>3. Déterminez la nature de l'accident et les risques éventuels</p>

    <router-link :to="{ name: 'urgence2' }" tag="h1" class="app-title">
      Précédent
    </router-link>
    <router-link :to="{ name: 'urgence4' }" tag="h1" class="app-title">
      Suivant
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'urgence3',
}
</script>

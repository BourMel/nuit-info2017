<template>
  <div class="urgence">
    <h1>Urgence</h1>

    <p>4. Déterminez le nombre et l'état des victimes</p>

    <router-link :to="{ name: 'urgence3' }" tag="h1" class="app-title">
      Précédent
    </router-link>
    <router-link :to="{ name: 'urgence5' }" tag="h1" class="app-title">
      Suivant
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'urgence4',
}
</script>

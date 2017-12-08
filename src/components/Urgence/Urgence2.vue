<template>
  <div class="urgence">
    <h1>Urgence</h1>

    <p>2. Localisez l'emplacement de l'accident</p>

    <router-link :to="{ name: 'urgence' }" tag="h1" class="app-title">
      Précédent
    </router-link>
    <router-link :to="{ name: 'urgence3' }" tag="h1" class="app-title">
      Suivant
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'urgence2',
}
</script>

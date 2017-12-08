<template>
  <div>
    <h1>Urgence</h1>

    <p>1. Sécurisez les lieux de l'accident</p>
    <ul>
      <li>Posez un triangle</li>
      <li>Portez un gilet jaune</li>
      <li>Mettez les passagers de votre véhicule à l'abri</li>
    </ul>

    <router-link :to="{ name: 'urgence2' }" tag="h1" class="app-title">
      Suivant
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'urgence',
}
</script>

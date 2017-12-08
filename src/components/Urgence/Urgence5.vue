<template>
  <div class="urgence">
    <h1>Urgence</h1>

    <p>5. Prévenez les secours</p>

    <ul>
      <li><a href="tel:15">SAMU</a></li>
      <li><a href="tel:18">Pompiers</a></li>
      <li><a href="tel:17">Police</a></li>
      <li><a href="tel:112">Numéro d'urgence européen</a></li>
    </ul>

    <router-link :to="{ name: 'urgence4' }" tag="h1" class="app-title">
      Précédent
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'urgence5',
}
</script>

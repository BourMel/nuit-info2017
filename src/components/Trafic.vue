<template>
  <div>
    <h1>Page trafic</h1>
    <section v-for="item in feed">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'trafic',
  data() {
    return {
      feed: [
        {
          title: "Écoutez la radio sur la page 'Conduite' !",
          description: "Rendez-vous dans le mode de conduite pour écouter une superbe webradio"
        },
        {
          title: "Accident sur l'A4",
          description: "Un accident impliquant une voiture avec un camion a eu lieu il y a une vingtaine de minutes sur l'A4 en direction de Strasbourg."
        },
        {
          title: "Route barrée pour cause de traversée de licornes",
          description: "Un troupeau de licornes traverse actuellement la route TheBestStreet, par précaution empruntez l'itinéraire de déviation."
        }
      ]
    }
  }
}
</script>

<style scoped>
section {
  border: 1px solid #fff;
  margin: 75px 10px;
  border-radius: 3px;
  padding: 12px;
}
</style>

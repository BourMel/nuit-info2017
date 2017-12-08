<template>
  <div class="conduite">
    <div class="citation">
      {{ msgs[Math.floor(Math.random() * msgs.length)] }}
    </div>
    <audio src="http://www.radioking.com/play/radio-nuit-info" controls autoplay></audio>
  </div>
</template>

<script>
export default {
  name: 'conduite',
  data() {
    return {
      msgs: [
        "N'oubliez pas d'attacher votre ceinture !",
        "Avez vous fait récemment votre contrôle technique ?",
        "Lâchez ce téléphone pour conduire !"
      ]
    };
  }
}
</script>

<style scoped>
.conduite {

}
.citation {
  font-style: italic;
  font-size: 72px;
  padding: 42px;
}
.citation::before {
  content: '❝';
}
.citation::after {
  content: '❞';
}
</style>

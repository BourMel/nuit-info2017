

<template>
  <div class="conduite">
    <div class="citation">
      {{ msgs[Math.floor(Math.random() * msgs.length)] }}
    </div>
    <div id="player">
      <audio src="http://www.radioking.com/play/radio-nuit-info"></audio>
      <div class="btn" @click="playpause">
        <span>▶</span>
      </div>
      <h2>{{ radio.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conduite',
  data() {
    return {
      msgs: [
        "Lâchez ce téléphone pour conduire !",
        "N'oubliez pas d'attacher votre ceinture !",
        "Avez-vous fait récemment votre contrôle technique ?",
      ],
      radio: {
        title: "Chargement..."
      },
    };
  },
  methods: {
    playpause: function() {
      var player = document.getElementById('player');
      var audio = player.querySelector('audio');
      var btn = player.querySelector('.btn');
      var btnContent = btn.querySelector('span');

      var isPlaying = !audio.paused;
      if (isPlaying) {
        audio.pause();
        btnContent.innerHTML = "▶";
      } else {
        audio.play();
        btnContent.innerHTML = "⏸";
      }
      console.log("azeaz");
    }
  },
  mounted: function() {
    fetch('https://www.radioking.com/widgets/currenttrack.php?radio=116593&format=json').then((response) => {
      return response.json();
    }).then((response) => {
      this.radio.title = response.title;
    });
    setInterval(() => {
      fetch('https://www.radioking.com/widgets/currenttrack.php?radio=116593&format=json').then((response) => {
        return response.json();
      }).then((response) => {
        this.radio.title = response.title;
      });
    }, 10000);
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
#player {

}
#player .btn {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: 3px solid #fff;
  margin: auto;
  text-align: center;
  padding: 75;
  font-size: 75px;
}
</style>

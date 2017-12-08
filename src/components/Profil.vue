<template>
  <div>
    <h1>Page de profil</h1>

    <div id="cache" v-on:click="hide">
      {{ message }}
    </div>

    <ul>
      <!-- RADIO  -->
      <li>
        <img src="../assets/logo.png" class="badge" v-on:click="display" id="radio" />
        <progress value="40" max="100"></progress>
      </li>

      <!-- SAM  -->
      <li>
        <img src="../assets/logo.png" class="badge" v-on:click="display" id="sam" />
        <progress value="40" max="100"></progress>
      </li>

      <!-- EVENEMENT  -->
      <li>
        <img src="../assets/logo.png" class="badge" v-on:click="display" id="evenement" />
        <progress value="40" max="100"></progress>
      </li>

      <!-- CONDUITE  -->
      <li>
        <img src="../assets/logo.png" class="badge" v-on:click="display" id="conduite" />
        <progress value="40" max="100"></progress>
      </li>

      <!-- APPLI  -->
      <li>
        <img src="../assets/logo.png" class="badge" v-on:click="display" id="appli" />
        <progress value="40" max="100"></progress>
      </li>

      <!-- PROFIL  -->
      <li>
        <img src="../assets/logo.png" class="badge" v-on:click="display" id="profil" />
        <progress value="40" max="100"></progress>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        radio: [
          "A levé le voile du silence",
          "Adepte des vibrations sonores",
          "Enivré.e de balado-diffusions"
        ],
        sam: [
          "A perdu à la courte paille",
          "Décidément malchanceux.se",
          "Altruiste abstinent"
        ],
        evenement: [
          "Crieur de la chaussée",
          "Citoyen modèle",
          "Prophète accompli"
        ],
        conduite: [
          "Est sorti de chez soi et a découvert le monde",
          "Nomade responsable",
          "Globe-trotteur honorable"
        ],
        appli: [
          "Clic accidentel",
          "Curieux.se apprivoisé.e",
          "Pélerin dévoué"
        ],
        profil: [
          "Premier coup d’oeil dans la glace",
          "Préoccupé.e par son image",
          "Egocentrique narcissique"
        ]
      };
    },
    methods: {
      display: function (e) {
        //afficher le bon niveau (bdd)
        let level_radio = 0;
        let level_sam = 0;
        let level_evenement = 0;
        let level_conduite = 0;
        let level_appli = 0;
        let level_profil = 0;

        document.getElementById("cache").style.display = 'block';

        switch(e.target.id) {
          case "radio":
            this.message = this.radio[level_radio];
            break;
          case "sam":
            this.message = this.sam[level_sam];
            break;
          case "evenement":
            this.message = this.evenement[level_evenement];
            break;
          case "conduite":
            this.message = this.conduite[level_conduite];
            break;
          case "appli":
            this.message = this.appli[level_appli];
            break;
          case "profil":
            this.message = this.profil[level_profil];
            break;
        }
      },
      hide: function (e) {
        e.target.style.display = 'none';
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  .badge {
    max-height:200px;
    margin-top: 20px;
  }

  #cache {
    display: none;
    margin: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    font-size: 3em;
  }

  progress {
    display: block;
    margin: auto;
    border: 1px solid black;
  }

</style>

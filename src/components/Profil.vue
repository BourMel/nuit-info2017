<template>
  <div>
    <h1>Page de profil</h1>

    <div id="cache" v-on:click="hide">
      <p>{{ descriptif }}</p>
      <p>{{ message }}</p>
    </div>

    <h2>Sam</h2>
    <div id="sam"></div>

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
        descriptif: '',
        radio: [
          "Vous avez écouté la radio",
          "A levé le voile du silence",
          "Adepte des vibrations sonores",
          "Enivré.e de balado-diffusions"
        ],
        sam: [
          "Vous avez été SAM",
          "A perdu à la courte paille",
          "Décidément malchanceux.se",
          "Altruiste abstinent"
        ],
        evenement: [
          "Vous avez signalé des évènements",
          "Crieur de la chaussée",
          "Citoyen modèle",
          "Prophète accompli"
        ],
        conduite: [
          "Vous avez utilisé le mode conduite",
          "Est sorti de chez soi et a découvert le monde",
          "Nomade responsable",
          "Globe-trotteur honorable"
        ],
        appli: [
          "Vous avez lancé l'application",
          "Clic accidentel",
          "Curieux.se apprivoisé.e",
          "Pélerin dévoué"
        ],
        profil: [
          "Vous avez consulté votre profil",
          "Premier coup d’oeil dans la glace",
          "Préoccupé.e par son image",
          "Egocentrique narcissique"
        ]
      };
    },
    methods: {
      display: function (e) {
        //afficher le bon niveau (bdd)
        let level_radio = 1;
        let level_sam = 1;
        let level_evenement = 1;
        let level_conduite = 1;
        let level_appli = 1;
        let level_profil = 1;

        document.getElementById("cache").style.display = 'block';

        switch(e.target.id) {
          case "radio":
            this.message = this.radio[level_radio];
            this.descriptif = this.radio[0];
            break;
          case "sam":
            this.message = this.sam[level_sam];
            this.descriptif = this.sam[0];
            break;
          case "evenement":
            this.message = this.evenement[level_evenement];
            this.descriptif = this.evenement[0];
            break;
          case "conduite":
            this.message = this.conduite[level_conduite];
            this.descriptif = this.conduite[0];
            break;
          case "appli":
            this.message = this.appli[level_appli];
            this.descriptif = this.appli[0];
            break;
          case "profil":
            this.message = this.profil[level_profil];
            this.descriptif = this.profil[0];
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
  }

  #cache p {
    font-size: 3em;
    color: black;
  }

  progress {
    display: block;
    margin: auto;
    border: 1px solid black;
  }

</style>

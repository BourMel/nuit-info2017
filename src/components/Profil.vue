<template>
  <div class="wrapper">
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
        <img src="../assets/radio.png" class="badge" v-on:click="display" id="radio" />
        <progress :value="level_radio" max="3"></progress>
      </li>

      <!-- SAM  -->
      <li>
        <img src="../assets/sam.png" class="badge" v-on:click="display" id="sam" />
        <!-- <p id="level">{{ level_sam }}</p> -->
        <progress :value="level_sam" max="3"></progress>
      </li>

      <!-- EVENEMENT  -->
      <li>
        <img src="../assets/evenement.png" class="badge" v-on:click="display" id="evenement" />
        <progress :value="level_evenement" max="3"></progress>
      </li>

      <!-- CONDUITE  -->
      <li>
        <img src="../assets/conduite.png" class="badge" v-on:click="display" id="conduite" />
        <progress :value="level_conduite" max="3"></progress>
      </li>

      <!-- APPLI  -->
      <li>
        <img src="../assets/click.png" class="badge" v-on:click="display" id="appli" />
        <progress :value="level_appli" max="3"></progress>
      </li>

      <!-- PROFIL  -->
      <li>
        <img src="../assets/profil.png" class="badge" v-on:click="display" id="profil" />
        <progress :value="level_profil" max="3"></progress>
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
        level_radio: 1,
        level_sam: 1,
        level_evenement: 1,
        level_conduite: 1,
        level_appli: 1,
        level_profil: 1,
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

        var cache = document.getElementById("cache");
        cache.style.display = 'block';

        switch(e.target.id) {
          case "radio":
            this.message = this.radio[this.level_radio];
            this.descriptif = this.radio[0];
            break;
          case "sam":
            this.message = this.sam[this.level_sam];
            this.descriptif = this.sam[0];
            break;
          case "evenement":
            this.message = this.evenement[this.level_evenement];
            this.descriptif = this.evenement[0];
            break;
          case "conduite":
            this.message = this.conduite[this.level_conduite];
            this.descriptif = this.conduite[0];
            break;
          case "appli":
            this.message = this.appli[this.level_appli];
            this.descriptif = this.appli[0];
            break;
          case "profil":
            this.message = this.profil[this.level_profil];
            this.descriptif = this.profil[0];
            break;
        }
      },
      hide: function () {
        document.getElementById('cache').style.display = 'none';
      }
    }
  }
</script>

<style scoped>
    #app {
        background: linear-gradient(135deg, red, blue) !important;
    }

  ul {
    position: relative;
    list-style: none;
    padding: 0;
  }

  .badge {
    max-height:200px;
    margin-top: 20px;
    cursor:pointer;
  }

  #cache {
    display: none;
    margin: auto;
    position: absolute;
    top: 0;
    z-index:1;
    width: 100%;
    height: 100%;
    background-color: white;
    cursor:pointer;
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

  #level {
    font-size: 3em;
    position:absolute;
    top: 20px;
    margin: auto;
  }

</style>

<template>
  <div>
    <p><em>Connectez-vous avec : 'test@example.com' et 'azeaze'</em></p>
    <h1>Connexion</h1>
    <label>Adresse mail :
      <input type="email" v-model="email">
    </label>
    <label>Mot de passe :
      <input type="password" v-model="password">
    </label>
    <button @click="signIn">Connexion</button>
    <router-link :to="{ name: 'signup' }" tag="button">Inscription</router-link>
    <br>
    <p>{{ error.message }}</p>
    <br>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
  name: 'login',
  data() {
    return {
      email: 'test@example.com',
      password: 'azeaze',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => {
        this.error = error;
      });
    }
  }
}
</script>

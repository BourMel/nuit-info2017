<template>
  <div>
    <h1>Inscription</h1>
    <label>Adresse mail :
      <input type="email" v-model="email">
    </label>
    <label>Mot de passe :
      <input type="password" v-model="password">
    </label>
    <button @click="signUp">Inscription</button>
    <br>
    <p>{{ error.message }}</p>
    <br>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => {
        this.error = error;
      });
    }
  }
}
</script>

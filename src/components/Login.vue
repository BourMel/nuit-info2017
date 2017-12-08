<template>
  <div>
    <h1>Connexion</h1>
    <label>Adresse mail :<br/>
      <input type="email" v-model="email"><br/>
    </label>
    <label>Mot de passe :<br/>
      <input type="password" v-model="password"><br/>
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
      email: '',
      password: '',
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

<style scoped>
h1 {
    margin: 50px auto;
    padding: 5px 0;
    text-transform: uppercase;
    font-size: 1.2em;
    border: 2px solid #FFF;
    width: 80%;
}
label {
    display: block;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 20px;
}
input {
    width: 80%;
    margin-top: 5px;
    outline: none;
    color: #FFF;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #FFF;
}
button {
    border: 1px solid #FFF;
    background-color: transparent;
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 5px 15px;
    color: #FFF;
    border-radius: 25px;
}
</style>
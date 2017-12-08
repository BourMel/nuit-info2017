import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBNkDFOGgKsfipDDmiNvF1yt0VO_ZuYhLU",
  authDomain: "ndi2017-fire.firebaseapp.com",
  databaseURL: "https://ndi2017-fire.firebaseio.com",
  projectId: "ndi2017-fire",
  storageBucket: "ndi2017-fire.appspot.com",
  messagingSenderId: "993486980395"
};

export const firebaseApp = firebase.initializeApp(config);

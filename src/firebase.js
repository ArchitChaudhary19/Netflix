import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDcOU5zetSZWVstBHt-uXnYHOzS5c8JbLo",
    authDomain: "netflix-clone-5202e.firebaseapp.com",
    projectId: "netflix-clone-5202e",
    storageBucket: "netflix-clone-5202e.appspot.com",
    messagingSenderId: "413544482603",
    appId: "1:413544482603:web:fc0322b5cb575a0e69276e",
    measurementId: "G-9S4QW2D552"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
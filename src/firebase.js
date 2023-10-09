import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFW2QSE4g_Wu1jGYe5e76ud6lugcYMMko",
  authDomain: "linkedin-38a51.firebaseapp.com",
  projectId: "linkedin-38a51",
  storageBucket: "linkedin-38a51.appspot.com",
  messagingSenderId: "29567508042",
  appId: "1:29567508042:web:a63a0f991848c7367b90b3",
  measurementId: "G-EN2CM4GP0G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db
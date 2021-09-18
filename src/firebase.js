import firebase from "firebase";


const app = firebase.intializeApp(firebaseConfig);
const auth = app.auth();
const db  = app.firestore();

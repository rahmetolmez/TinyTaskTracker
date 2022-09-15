// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//import * as firebase from "firebase/compat";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
/////
//import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzHWuG5XN2BmCftcTt6HFqajhJri5QlM4",
  authDomain: "tinytasktracker.firebaseapp.com",
  projectId: "tinytasktracker",
  storageBucket: "tinytasktracker.appspot.com",
  messagingSenderId: "570973793236",
  appId: "1:570973793236:web:87f061de9157d0970cc441",
  measurementId: "G-YNXDCKR67T",
};

// Initialize Firebase
// let app;
// if (firebaseConfig.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

//const app = firebase.initializeApp(firebaseConfig);
//const auth = getAuth(firebaseApp);
//const analytics = getAnalytics(app);

/*let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = getFirestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };*/
//export { auth };
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
  console.log("oneeee");
} else {
  app = firebase.app();
  console.log("twooooo");
}
const auth = firebase.auth();
console.log(auth);

export const db = getFirestore(app);
//const auth = getAuth(app);
export { auth };

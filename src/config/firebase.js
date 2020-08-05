import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBDdYJnb4_DKl6K5RYr20NPJq__GQe8wxs",
  authDomain: "revents-8f021.firebaseapp.com",
  databaseURL: "https://revents-8f021.firebaseio.com",
  projectId: "revents-8f021",
  storageBucket: "revents-8f021.appspot.com",
  messagingSenderId: "472160881801",
  appId: "1:472160881801:web:e5c4dd1094996a61cdca58",
  measurementId: "G-7WG8QVSZP7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

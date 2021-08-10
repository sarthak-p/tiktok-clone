import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiQpvHfUph8iX9OTef0MKnoNdBRxKOekA",
  authDomain: "tito-c2656.firebaseapp.com",
  projectId: "tito-c2656",
  storageBucket: "tito-c2656.appspot.com",
  messagingSenderId: "638455093365",
  appId: "1:638455093365:web:2a33733f78c78b98a4c03c",
  measurementId: "G-20NJHRFWMP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

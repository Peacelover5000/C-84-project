import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA5nqvPHpvgxbHSQ2Ia-CKvuTvonArGB3c",
  authDomain: "bicycle-service-ae15f.firebaseapp.com",
  projectId: "bicycle-service-ae15f",
  storageBucket: "bicycle-service-ae15f.appspot.com",
  messagingSenderId: "654353032985",
  appId: "1:654353032985:web:8b752da67648987e570788",
  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

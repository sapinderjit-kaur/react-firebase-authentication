import firebase from "firebase";
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyALbmFIW6rdN9QRZvFyTAWzk9BoWDTUVJQ",
    authDomain: "fir-react-authentication-52844.firebaseapp.com",
    projectId: "fir-react-authentication-52844",
    storageBucket: "fir-react-authentication-52844.appspot.com",
    messagingSenderId: "669332186802",
    appId: "1:669332186802:web:8047ed0550650081a50bab"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;

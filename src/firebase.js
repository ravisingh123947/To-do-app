// For Firebase JS SDK v7.20.0 and later, measurementId is optiona

//   import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyARZgpokNp61UbBeoA5umbeIP0o4fCek1Q",
    authDomain: "todo-app-871b7.firebaseapp.com",
    projectId: "todo-app-871b7",
    storageBucket: "todo-app-871b7.appspot.com",
    messagingSenderId: "770050005169",
    appId: "1:770050005169:web:1af2cef1440914f164ea90",
    measurementId: "G-HVPRNX7DSS"
  };

//   const db=firebaseApp.firestore();
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
 



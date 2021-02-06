import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB60tCKvUNYKPrHo4mEaBK7NPJeFEEcYro",
    authDomain: "test-5e9dc.firebaseapp.com",
    projectId: "test-5e9dc",
    storageBucket: "test-5e9dc.appspot.com",
    messagingSenderId: "48087414046",
    appId: "1:48087414046:web:ba26b4b483c2f28dde050f",
    measurementId: "G-8FDLTKNKKH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase
import firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCEPZeUWLAZb9r6gW2lvn0wlWcIX2Lw6RA",
    authDomain: "barter-system-app-59e21.firebaseapp.com",
    projectId: "barter-system-app-59e21",
    storageBucket: "barter-system-app-59e21.appspot.com",
    messagingSenderId: "1064837722616",
    appId: "1:1064837722616:web:d228e1baba91a233c3660d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

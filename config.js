import firebase from 'firebase';

// add SDK Firebase

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyACdcrugsJxnTfXGcSmxxcub8bVclm2kXc",
  
    authDomain: "classtest-1d7e3.firebaseapp.com",
  
    projectId: "classtest-1d7e3",
  
    storageBucket: "classtest-1d7e3.appspot.com",
  
    messagingSenderId: "592814950374",
  
    appId: "1:592814950374:web:a5d5c0fc19863a86dbf827"
  
      
      };
      
      
      // Initialize Firebase

const app = initializeApp(firebaseConfig);
      
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
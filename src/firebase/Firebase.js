import firebase from 'firebase/app'; 
import  'firebase/auth';
import  'firebase/database';

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>

  const config = {
    apiKey: "AIzaSyASyCjR2kBT6KESOOHhmQuudOjYMl74tuE",
    authDomain: "authentication-2bf80.firebaseapp.com",
    databaseURL: "https://authentication-2bf80.firebaseio.com",
    projectId: "authentication-2bf80",
    storageBucket: "authentication-2bf80.appspot.com",
    messagingSenderId: "238390844575",
    appId: "1:238390844575:web:d9547c2a0eece6ed6496aa",
    measurementId: "G-JTZX5JR6H3"
  }

const Firebase = firebase.initializeApp(config);

// Google Sign In
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(googleProvider);

// Facebook Sign in
var facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ 'display': 'popup' });
export const signInWithFacebook = () => firebase.auth().signInWithPopup(facebookProvider);

// Yahoo Sign In 
var yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
yahooProvider.setCustomParameters({ prompt: 'login' });
export const signInWithYahoo = () =>  firebase.auth().signInWithPopup(yahooProvider)

// Twitter Sign In
var twitterProvider = new firebase.auth.TwitterAuthProvider();
export const signInWithTwitter = () => firebase.auth().signInWithPopup(twitterProvider)


export default Firebase
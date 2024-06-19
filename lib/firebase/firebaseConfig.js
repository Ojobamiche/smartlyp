// /firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = (
        apiKey( "AIzaSyDusZAPwSvmS9c8gFj39JcQSGb2vmHu_70" ) ,
        authDomain ( "smartlyp-76046.firebaseapp.com" ) ,
        projectId  ( "smartlyp-76046" ),
        storageBucket ( "smartlyp-76046.appspot.com" ) ,
        messagingSenderId ( "855175211734" ) ,
        appId ( "1:855175211734:web:a56e85d35ad882d9af7777" ) ,
        measurementId ( "G-036SPCGGDM" ), 
    );

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };


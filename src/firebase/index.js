import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({ 
    apiKey: "AIzaSyDetWhdU49-gW7ZH9ed4nkKOTjWWWK2N4M",
    authDomain: "electronica-diner.firebaseapp.com",
    projectId: "electronica-diner",
    storageBucket: "electronica-diner.appspot.com",
    messagingSenderId: "186411810199",
    appId: "1:186411810199:web:1add19681f0003f51818d2",
    measurementId: "G-H551JP4F7E"
 });

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)
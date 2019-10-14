import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsIbnJjCOPUrR6Jj4GsnaU9pYOyeAigCo",
    authDomain: "semnas-admi-2019.firebaseapp.com",
    databaseURL: "https://semnas-admi-2019.firebaseio.com",
    projectId: "semnas-admi-2019",
    storageBucket: "semnas-admi-2019.appspot.com",
    messagingSenderId: "669948051468",
    appId: "1:669948051468:web:915e64bbde08ab43672e29",
    measurementId: "G-GS4VPBVR72"
});

const db = firebaseApp.firestore();

export { db };
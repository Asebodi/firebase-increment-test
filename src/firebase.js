import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9-j166Pz8ks4iTPixOQvI_klrRYKwWfM",
    authDomain: "increment-test.firebaseapp.com",
    databaseURL: "https://increment-test.firebaseio.com",
    projectId: "increment-test",
    storageBucket: "increment-test.appspot.com",
    messagingSenderId: "946632346196",
    appId: "1:946632346196:web:dc416870d677909b4cfbc1",
    measurementId: "G-4WSCMJF0F7"
});

const db = firebaseApp.firestore();

export { db };
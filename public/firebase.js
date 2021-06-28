import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBWOjrkGt8fb9ughUU9OTpcYhvFlZXXtyQ",
  authDomain: "learn-firebase-1455d.firebaseapp.com",
  projectId: "learn-firebase-1455d",
  storageBucket: "learn-firebase-1455d.appspot.com",
  messagingSenderId: "259101401636",
  appId: "1:259101401636:web:37591cbb849ac69950eeb1",
  measurementId: "G-XCY0YRNWW3"
}

firebase.initializeApp(firebaseConfig)
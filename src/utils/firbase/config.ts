// Import the functions you need from the SDKs you need
var firebase = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcWmU3fks87w1Myq_KWD6C7WUAgzAiZl0",
  authDomain: "excel-upload-ff37b.firebaseapp.com",
  databaseURL: "https://excel-upload-ff37b-default-rtdb.firebaseio.com",
  projectId: "excel-upload-ff37b",
  storageBucket: "excel-upload-ff37b.appspot.com",
  messagingSenderId: "992045528200",
  appId: "1:992045528200:web:b4adcbc3ce5e60a11b5b3d",
  measurementId: "G-K04FWD7EKV"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
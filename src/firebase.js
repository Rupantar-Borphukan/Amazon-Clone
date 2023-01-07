import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL2HHk7Aa4PBkLTmUehuewaaB40clGls8",
  authDomain: "clone-cae18.firebaseapp.com",
  projectId: "clone-cae18",
  storageBucket: "clone-cae18.appspot.com",
  messagingSenderId: "186446239973",
  appId: "1:186446239973:web:0f716f55251d76dd189c0c",
  measurementId: "G-H7BFY1ZSV5"
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
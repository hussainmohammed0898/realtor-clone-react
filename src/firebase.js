// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNEFJ2y5Min9S2tzJsOF_4RPbH4ijTT0w",
  authDomain: "realtor-clone-react-db9ba.firebaseapp.com",
  projectId: "realtor-clone-react-db9ba",
  storageBucket: "realtor-clone-react-db9ba.appspot.com",
  messagingSenderId: "1058495763680",
  appId: "1:1058495763680:web:93462d332b8869c6622c85"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore();
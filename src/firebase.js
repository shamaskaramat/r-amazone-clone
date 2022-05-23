import { initializeApp } from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCcR87vZ4A8eUWvgZKr7XMUb5PM9Hg209A",
  authDomain: "e-clone-1203f.firebaseapp.com",
  projectId: "e-clone-1203f",
  storageBucket: "e-clone-1203f.appspot.com",
  messagingSenderId: "230159095874",
  appId: "1:230159095874:web:1921e64023b51de38ff5db"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
export { auth };
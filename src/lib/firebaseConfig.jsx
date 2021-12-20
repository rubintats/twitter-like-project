import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAkIAEIUG7U6xf02twrKTZljbBuTnai_4",
  authDomain: "micro-blogging-project-c8dd4.firebaseapp.com",
  projectId: "micro-blogging-project-c8dd4",
  storageBucket: "micro-blogging-project-c8dd4.appspot.com",
  messagingSenderId: "361931095980",
  appId: "1:361931095980:web:49ad213409f6dae7654409",
  measurementId: "G-EN6J9TQCWS",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth()
export { db, auth };




import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9k3CKV2ZFdwzQSEYgD_xmixxnDMUhHH0",
  authDomain: "disk-doctor-907ae.firebaseapp.com",
  projectId: "disk-doctor-907ae",
  storageBucket: "disk-doctor-907ae.appspot.com",
  messagingSenderId: "443173694206",
  appId: "1:443173694206:web:60c051ab38c3400ee6d3af",
  measurementId: "G-DK5B12QFY6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

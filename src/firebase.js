import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHDoF8MaYXtIwMJNtP1Xz4aMFQe8y693c",
  authDomain: "reactjs-os.firebaseapp.com",
  projectId: "reactjs-os",
  storageBucket: "reactjs-os.firebasestorage.app",
  messagingSenderId: "686633559269",
  appId: "1:686633559269:web:64b5fb19e6a81083d6200c",
  measurementId: "G-1REWW7P4G2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
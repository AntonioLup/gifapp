// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE8mlok9v1EI1CV11BHEVfB4cSwzaiqn4",
  authDomain: "gif-app-ed28d.firebaseapp.com",
  projectId: "gif-app-ed28d",
  storageBucket: "gif-app-ed28d.appspot.com",
  messagingSenderId: "583697603104",
  appId: "1:583697603104:web:cb1f202ec7b464ea107a45",
  measurementId: "G-7V97XL0BJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function singup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
}

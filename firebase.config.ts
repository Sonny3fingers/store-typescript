// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ZuiO54_znvYL4oX-LZPXkjrXwhuaJh4",
  authDomain: "magic-bookshelf-app.firebaseapp.com",
  projectId: "magic-bookshelf-app",
  storageBucket: "magic-bookshelf-app.appspot.com",
  messagingSenderId: "636853641345",
  appId: "1:636853641345:web:609e0baf06c2741db2ad80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkigqYk6okJt3jDPiufsHAjP4tFX-ZbaE",
  authDomain: "garnier-message-wall.firebaseapp.com",
  projectId: "garnier-message-wall",
  storageBucket: "garnier-message-wall.appspot.com",
  messagingSenderId: "990431025519",
  appId: "1:990431025519:web:cea57d2735d4bf4bef709a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storagedb = getStorage(app);

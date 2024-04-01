import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxFhHrhrcqQJeE3Ndhmmdd6VQuU_5wphQ",
  authDomain: "garniermessagewall.firebaseapp.com",
  projectId: "garniermessagewall",
  storageBucket: "garniermessagewall.appspot.com",
  messagingSenderId: "724936613987",
  appId: "1:724936613987:web:f0aa121645a1f561019856"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storagedb = getStorage(app);

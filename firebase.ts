import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlRLUM6woADohpgHlzLuUd4F3byygmoMA",
  authDomain: "notion-clone-e794b.firebaseapp.com",
  projectId: "notion-clone-e794b",
  storageBucket: "notion-clone-e794b.firebasestorage.app",
  messagingSenderId: "243776407029",
  appId: "1:243776407029:web:8d5a57059534332e630cbc",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };

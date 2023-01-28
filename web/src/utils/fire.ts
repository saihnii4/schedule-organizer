import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqFWb25inong3eAuk5q0Elzq-tOzr7NuM",
  authDomain: "schedule-encoder.firebaseapp.com",
  projectId: "schedule-encoder",
  storageBucket: "schedule-encoder.appspot.com",
  messagingSenderId: "709793484267",
  appId: "1:709793484267:web:13b76ad5ee7438ae5c1dae",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

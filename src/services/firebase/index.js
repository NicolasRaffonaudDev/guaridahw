import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs6P1crD6r6CIUWGcsuc1KbSZ1UY32uXU",
  authDomain: "tienda-ecommerce-guaridahw.firebaseapp.com",
  projectId: "tienda-ecommerce-guaridahw",
  storageBucket: "tienda-ecommerce-guaridahw.appspot.com",
  messagingSenderId: "443153257492",
  appId: "1:443153257492:web:24b86b778787d01d388301"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
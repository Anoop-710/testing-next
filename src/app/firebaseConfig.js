import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: "contactformiqs.firebaseapp.com",
  projectId: "contactformiqs",
  storageBucket: "contactformiqs.appspot.com",
  messagingSenderId: "104181080752",
  appId: "1:104181080752:web:69aefbdc0fb5b4a146d175",
  measurementId: "G-5Q62GNKR18",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

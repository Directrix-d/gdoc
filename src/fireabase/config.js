import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFQxPk6Cfbiu18vGhEJciDb0SbZgFfgZI",
  authDomain: "g-doc-48560.firebaseapp.com",
  projectId: "g-doc-48560",
  storageBucket: "g-doc-48560.appspot.com",
  messagingSenderId: "232174661549",
  appId: "1:232174661549:web:dc788f1dbb6efb39fe3b24"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };

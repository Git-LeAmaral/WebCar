import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKypQlgj16hT3hQGTg-4H4TAAltKWE6nc",
  authDomain: "webcar-cd598.firebaseapp.com",
  projectId: "webcar-cd598",
  storageBucket: "webcar-cd598.appspot.com",
  messagingSenderId: "1079110969386",
  appId: "1:1079110969386:web:8bcd27d4abb554d3227b53"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
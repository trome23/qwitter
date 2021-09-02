import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC-SXNF6ihqmhYqEv7SEiGEbiNqpplRz4Q",
  authDomain: "qwitter-a9635.firebaseapp.com",
  projectId: "qwitter-a9635",
  storageBucket: "qwitter-a9635.appspot.com",
  messagingSenderId: "892653275429",
  appId: "1:892653275429:web:1333a71095fbdd7a7f72cc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdA7i_Xj82xqz5gPomJSX13FAklB7wtc",
  authDomain: "score71-691a4.firebaseapp.com",
  projectId: "score71-691a4",
  storageBucket: "score71-691a4.appspot.com",
  messagingSenderId: "563084169498",
  appId: "1:563084169498:web:09b16d224947dee44c9ca3",
  measurementId: "G-Q06QHRZZ67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const storageRef = ref(storage);

export { app, db, storage };
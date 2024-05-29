// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC284dlcIHIwvusOA_Mx_VpURCIzAs1p0c",
  authDomain: "score71-92de5.firebaseapp.com",
  projectId: "score71-92de5",
  storageBucket: "score71-92de5.appspot.com",
  messagingSenderId: "575416300749",
  appId: "1:575416300749:web:f03c0d7df06b912213e584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const storageRef = ref(storage);

export { app, db, storage };
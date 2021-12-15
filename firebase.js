import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDODtTQ6EIT-O1I1oNZVXAQQxDzig2TLS4",
    authDomain: "twitter-next-firebase.firebaseapp.com",
    projectId: "twitter-next-firebase",
    storageBucket: "twitter-next-firebase.appspot.com",
    messagingSenderId: "243699785531",
    appId: "1:243699785531:web:fa973f6e2b0b395578a11e"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
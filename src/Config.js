import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDWsQR4v2amXKZieo8FENmhiIahxFLoHJg",
    authDomain: "spd-project-a856e.firebaseapp.com",
    projectId: "spd-project-a856e",
    storageBucket: "spd-project-a856e.appspot.com",
    messagingSenderId: "612462418697",
    appId: "1:612462418697:web:060cf88d9bb315a49751d8",
    measurementId: "G-QJBVTFWRS4"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)

export default app;
import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
//import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {

    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "ratrun-564ac",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };
    initializeApp(firebaseConfig);

    const isEmulating = window.location.hostname === "localhost";
    if (isEmulating) {
        const auth = getAuth();
        connectAuthEmulator(auth, "http://localhost:3000");

        //const storage = getStorage();
        //connectStorageEmulator(storage, "localhost", 9199);

        //const db = getFirestore();
        //connectFirestoreEmulator(db, 'localhost', 8080); 

        const functions = getFunctions();
        connectFunctionsEmulator(functions, "localhost", 5001);
    }
});

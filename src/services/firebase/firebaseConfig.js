import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCeWYwtiUVvdbr8vXMvP3NsaX6c5XER0pg",
    authDomain: "ether-db0c2.firebaseapp.com",
    projectId: "ether-db0c2",
    storageBucket: "ether-db0c2.appspot.com",
    messagingSenderId: "373073282634",
    appId: "1:373073282634:web:b127507e960727f7a5c8b3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {useStateValue} from "./components/StateProvider.jsx";
import {actionTypes} from "./components/reducer.jsx";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_apiKey,
    authDomain: import.meta.env.VITE_APP_FIREBASE_authDomain,
    projectId: import.meta.env.VITE_APP_FIREBASE_projectId,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_storageBucket,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_messagingSenderId,
    appId: import.meta.env.VITE_APP_FIREBASE_appId,
    measurementId: import.meta.env.VITE_APP_FIREBASE_measurementId,
};


// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
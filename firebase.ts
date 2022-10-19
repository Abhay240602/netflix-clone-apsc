// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9d5WBai_zQP5fX8jq45vCVreM_MAZTK8",
    authDomain: "netflix-clone-apsc.firebaseapp.com",
    projectId: "netflix-clone-apsc",
    storageBucket: "netflix-clone-apsc.appspot.com",
    messagingSenderId: "514214011608",
    appId: "1:514214011608:web:1c54b216ed9c35dd2aedad"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
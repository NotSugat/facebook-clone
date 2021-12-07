// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaJJ3Jshiqq0pmH9R1wyTYOTFv8V6mnI4',
  authDomain: 'facebook-clone-sugat.firebaseapp.com',
  projectId: 'facebook-clone-sugat',
  storageBucket: 'facebook-clone-sugat.appspot.com',
  messagingSenderId: '279321917963',
  appId: '1:279321917963:web:9fe23ac674efcf9ed0a50e',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }

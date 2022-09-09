import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDhN0dAihzaesPZTnDv0HpPQSq0624zubI",
  authDomain: "sastagram-7bd67.firebaseapp.com",
  projectId: "sastagram-7bd67",
  storageBucket: "sastagram-7bd67.appspot.com",
  messagingSenderId: "892672151427",
  appId: "1:892672151427:web:de4cbc4311c4dc8acf70b6"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

export default storage;
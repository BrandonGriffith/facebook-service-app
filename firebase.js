import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "social-media-clone-project.firebaseapp.com",
    projectId: "social-media-clone-project",
    storageBucket: "social-media-clone-project.appspot.com",
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };

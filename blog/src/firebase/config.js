import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBytDd5zxJRMTpQ4B9i0vRC0hYToBkzXJI",
  authDomain: "blog-82419.firebaseapp.com",
  projectId: "blog-82419",
  storageBucket: "blog-82419.firebasestorage.app",
  messagingSenderId: "27646331338",
  appId: "1:27646331338:web:a4a95174b5e8ce158fa733",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
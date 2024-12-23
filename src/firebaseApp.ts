
// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGESENDER,
  appId: import.meta.env.VITE_APP_ID
};

export let app:FirebaseApp;

try {
  app = getApp("app");
} catch(e) {
  
  app = initializeApp(firebaseConfig, "app");
  console.log(e)
}

const firebase = initializeApp(firebaseConfig)
export default firebase;
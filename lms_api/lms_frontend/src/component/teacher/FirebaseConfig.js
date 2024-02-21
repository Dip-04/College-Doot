// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTyn5m5GPXwCwWlBppGxukSHVnJ8Jqa04",
  authDomain: "college-doot.firebaseapp.com",
  projectId: "college-doot",
  storageBucket: "college-doot.appspot.com",
  messagingSenderId: "773224479784",
  appId: "1:773224479784:web:44d5fc8d2a79cbee8ec91d",
  measurementId: "G-ZYN0C8B20M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth()
export {app,auth}

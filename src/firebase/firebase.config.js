// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFuaZPwutUgKmbW_x1P2168DrTk3AjLLA",
  authDomain: "auth-moha-milon-8ef47.firebaseapp.com",
  projectId: "auth-moha-milon-8ef47",
  storageBucket: "auth-moha-milon-8ef47.appspot.com",
  messagingSenderId: "809019958491",
  appId: "1:809019958491:web:afe6c09fdef4bef30258fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

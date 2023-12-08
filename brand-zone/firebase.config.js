// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3eSotkfib3BkWHUExNg3MZgtucTMGSUQ",
  authDomain: "sweet-shop-cc170.firebaseapp.com",
  projectId: "sweet-shop-cc170",
  storageBucket: "sweet-shop-cc170.appspot.com",
  messagingSenderId: "1064102654986",
  appId: "1:1064102654986:web:d14ee2cc62c5deebde9bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
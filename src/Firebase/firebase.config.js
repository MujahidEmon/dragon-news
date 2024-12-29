// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwWnPLuvKf5TU2vg7rPwh-VQZQFxJbKXY",
  authDomain: "dragon-news-1ae9a.firebaseapp.com",
  projectId: "dragon-news-1ae9a",
  storageBucket: "dragon-news-1ae9a.firebasestorage.app",
  messagingSenderId: "261620331780",
  appId: "1:261620331780:web:4cf4dd136158346b284c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
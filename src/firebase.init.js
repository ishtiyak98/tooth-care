// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjNqZAfpVntyf-5C5tR_atrsz49g2pitw",
  authDomain: "toothcare-216a3.firebaseapp.com",
  projectId: "toothcare-216a3",
  storageBucket: "toothcare-216a3.appspot.com",
  messagingSenderId: "752457854459",
  appId: "1:752457854459:web:f02d8ba81137d346616f5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIS-kEBSogB_4oZiz0b490h-ZiVMRPVo",
  authDomain: "legend-studio-6bd86.firebaseapp.com",
  projectId: "legend-studio-6bd86",
  storageBucket: "legend-studio-6bd86.appspot.com",
  messagingSenderId: "535973107454",
  appId: "1:535973107454:web:f88b9fba1d2436e38ef7af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

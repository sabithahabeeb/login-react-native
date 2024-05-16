// Import the functions you need from the SDKs you need
// import { getTabBarHeight } from "@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBgsIsrdPZR2y5SUl-DTltsRWn7k5Pu5I",
  authDomain: "react-native-8ccaf.firebaseapp.com",
  projectId: "react-native-8ccaf",
  storageBucket: "react-native-8ccaf.appspot.com",
  messagingSenderId: "1014385431209",
  appId: "1:1014385431209:web:4cfed4e85f1362008b4fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
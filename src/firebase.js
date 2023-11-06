import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_soEyP0JB1frM35jzk5fC7URC0wqCQUk",
  authDomain: "teacareplus-g23.firebaseapp.com",
  projectId: "teacareplus-g23",
  storageBucket: "teacareplus-g23.appspot.com",
  messagingSenderId: "766035264660",
  appId: "1:766035264660:web:5a991ea6d0ac6b5953e081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore =getFirestore(app);

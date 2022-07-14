import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_y3cqPoMQuibUeQjiuJhvUKVPtJOIFrM",
  authDomain: "user-auth-51416.firebaseapp.com",
  projectId: "user-auth-51416",
  storageBucket: "user-auth-51416.appspot.com",
  messagingSenderId: "511473953916",
  appId: "1:511473953916:web:16e2dfbf835c9db53fedf9",
  measurementId: "G-Y6MZ8GK5TQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
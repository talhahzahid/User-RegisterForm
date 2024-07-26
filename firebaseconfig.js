
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyArz8C9cSgwh-I1z2ZLhZyqAnrv9F7djTY",
   authDomain: "user-register-8fa75.firebaseapp.com",
   projectId: "user-register-8fa75",
   storageBucket: "user-register-8fa75.appspot.com",
   messagingSenderId: "1002069799005",
   appId: "1:1002069799005:web:6178f0ab0920a5137f9db4",
   measurementId: "G-2BVJS2W7PK"
 };

 
 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

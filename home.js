import { 
    onAuthStateChanged,
    signOut

} 
from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebaseconfig.js";
 
const btn = document.querySelector('#sign-out')

btn.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        window.location = 'login.html'
      }).catch((error) => {
        console.log(error);
      });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html";
    }
  });
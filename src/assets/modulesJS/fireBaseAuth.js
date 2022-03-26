import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import {app} from './fireBase';

const auth = getAuth(app);

export default (email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user)
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
    });


    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid)
          // ...
        } else {
            console.log('________________')

          // User is signed out
          // ...
        }
      });
}
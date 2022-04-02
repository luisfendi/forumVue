import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   updateProfile,
   signOut,
   } from "firebase/auth";

import {app} from './fireBase';

const auth = getAuth(app);

function createUser(email, password, displayName){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName,
        })
    })
    .catch((error) => {
        const errorMessage = error.message;
      console.log(errorMessage)
    });
}

function signIn(email, pass){
  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorMessage = error.message;
  });
}


 function authState(){
   return new Promise(res => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        res(user.displayName)
        return user.displayName
      } 
    })
   })  
}


function sign_Out(){
  console.log('signing out')
  return signOut(auth)
}
export {createUser, signIn, sign_Out, authState, onAuthStateChanged, auth}
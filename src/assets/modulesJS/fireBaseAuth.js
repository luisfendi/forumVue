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
async function getPhoto(){
  let photo = await fetch("https://loremflickr.com/320/240?random=1")
  return photo
}

function createUser(email, password, displayName){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName,
          photoURL: 'https://loremflickr.com/320/240?random=1'
        })
    })
    .catch((error) => {
        const errorMessage = error.message;
      console.log(errorMessage)
    });
}

function signIn(email, pass){
  return signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    const user = userCredential.user;
    return {
      status: true,
      user,
    }
  })
  .catch((error) => {
    return {
      status: false,
      error,
    }
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

function getUser(){
  return auth.currentUser;
}

export {createUser, getUser, signIn, sign_Out, authState, onAuthStateChanged, auth}
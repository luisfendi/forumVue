import { initializeApp } from "firebase/app";
import {getDatabase, ref, child, get} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIZ6GKKL-ChGaOSUVidTX39UVv8NQ9RNI",
  authDomain: "db-of-material-for-discuss.firebaseapp.com",
  databaseURL: "https://db-of-material-for-discuss-default-rtdb.firebaseio.com",
  projectId: "db-of-material-for-discuss",
  storageBucket: "db-of-material-for-discuss.appspot.com",
  messagingSenderId: "218857622577",
  appId: "1:218857622577:web:1047fd584f88ec9c955910"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default()=>{
    return get(ref(db, `posts/`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error('----EROROROROROOROR----');
    }); 
}

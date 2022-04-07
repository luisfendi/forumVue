import {db, get, ref} from "./fireBase"

export default()=>{
    return get(ref(db, `posts/`)).then((snapshot) => {
      if (snapshot.exists()) {
        let data = [];
        for(let key in snapshot.val()){
          data.push({[key]: snapshot.val()[key]})
        }
        return data
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      return error.message
    }); 
}

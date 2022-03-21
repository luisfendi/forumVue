
import {db, set} from "./fireBase"

export default(name, img, type)=>{
    let genRef = ref(db, 'posts/');
    let postRef = push(genRef); //we get a key of the post
    set(postRef, {name, img, type})
}
import {db, set, ref, push} from "./fireBase"

export default(id, comment)=>{
    let generalRef = ref(db, 'posts/' + id + '/comments');
    let commentRef = push(generalRef); //we get a key of the post
    let {author, text, uid, time} = comment
    set(commentRef, {author, text, uid, time})
}
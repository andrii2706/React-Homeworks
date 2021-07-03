import axios from "axios";

let postInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

const getUser =()=> postInstance.get('/users/');
// const getUsers =(id)=> postInstance('users/'+ id) ;
const getPost =(id)=> postInstance.get('/posts/'+id);
const getPostsOfUsers=(id)=> postInstance.get('/users/'+ id + '/posts');
const getCommentsofUser =(id)=> postInstance.get('/users/'+id+'/comments')
export {getUser,getPostsOfUsers,getPost,getCommentsofUser}
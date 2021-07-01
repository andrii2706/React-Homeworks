import axios from "axios";
let postInstance =axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

const getComments = () => postInstance('/comments');
const getComment = (id) => postInstance('/comments' + id);
const getPosts = () => postInstance('/posts');
const getPost = (id) => postInstance('/posts' + id);
const getUsers = () => postInstance('/users');
const getUsersOf =(id) => postInstance('users/'+ id +'/posts');
const getUser = (id) => postInstance('/users/' + id);
export {getUser,getPost,getPosts,getComment,getComments,getUsers,getUsersOf}
import axios from "axios";

let postInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
const getUser = () =>postInstance.get('/users/');
// const getUsers = () =>postInstance('/');
const getPost = (id) => postInstance.get('/posts/' +id);
const getPostOfUser = (id) => postInstance.get('/users/' +id + '/posts');
// const getPosts = () => postInstance('/');
export {getUser, getPost,getPostOfUser}
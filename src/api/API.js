// const getPosts = () =>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value=> value.json());
// };
// const getPost = (id) =>{
//     return fetch('https://jsonplaceholder.typicode.com/posts' + id)
//         .then(value=> value.json());
// };
//
// export {getPost, getPosts};



import axios from "axios";
let axiosInstents = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',

});
const getPosts = () => axiosInstents.get('posts/') ;
const getUsers = () => axiosInstents.get('users/') ;
const getUserPosts = (id) => axiosInstents.get('users/' + id + '/posts') ;
const getPost = (id) => axiosInstents.get('posts/' + id);



export {getPosts, getPost, getUsers, getUserPosts}

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
    baseURL:'https://jsonplaceholder.typicode.com/posts',

});
const getPosts = () => axiosInstents.get() ;
const getPost = (id) => axiosInstents.get(id);
export {getPosts, getPost}

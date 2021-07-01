import {useEffect, useState} from "react";

import Post from "./Post";
import {getPosts} from "../api/API";


export default function Posts({props, postOfUser}){

    // let[posts, setPosts] = useState([]);
    // useEffect(
    //     ()=>{
    //         getPosts().then(value => {
    //             setPosts(value.data)
    //         })
    //     },[])
// let fillter = posts.filter(value => value.userId === id)
    return(
        <div>
            {
                postOfUser.map(value => <Post item={value}/>)   }
        </div>
    )}
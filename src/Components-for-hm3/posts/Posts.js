import {useEffect, useState} from "react";

import Post from "./Post";
import {getPosts} from "../api/API";


export default function Posts(props){

    let[posts, setPosts] = useState([]);
    useEffect(
        ()=>{
            getPosts().then(value => {
                setPosts(value.data)
            })
        },[])

    return(
        <div>
            {
                posts.map(value => <Post item={value}/>)   }
        </div>
    )}
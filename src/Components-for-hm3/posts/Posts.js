import {useEffect, useState} from "react";
import {getPosts} from "../api/API";
import User from "../user/User";

export default function Users(){

    let[posts, setPosts] = useState([]);
    useEffect(
        ()=>{
            getPosts().then(value => {
                setPosts()(value.data)
            })
        },[])

    return(
        <div>
            {
                users.map(value => <User item={value}/>)   }
        </div>
    )}
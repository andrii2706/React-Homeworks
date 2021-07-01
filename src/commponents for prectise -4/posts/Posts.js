
import Post from "./Post";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../api/API";
import {useParams} from 'react-router-dom'

export default function Posts({id}){

    let [postOfUser, setPostOfUser] = useState([])
    console.log(postOfUser);
    useEffect(()=> {
        getPostOfUser(id).then(value => setPostOfUser([...value.data]))
    }, [])
    return(
<div>
    posts
    {
        postOfUser && postOfUser.map(value => <Post item={value}/>)
    }
</div>
)}
import {useEffect, useState} from "react";

import Post from "./Post";
import {getPostsOfUsers} from "../../servises/API-for-users/Api-for-users";

export default function Posts({id}){
let [postOfUser, setpostOfUser] = useState([]);

    useEffect(()=>{
    getPostsOfUsers(id).then(value => setpostOfUser([...value.data]))
},[id])


    return(
<div>

    {
        postOfUser && postOfUser.map(value => <Post item={value}/>)
    }

</div>
)}
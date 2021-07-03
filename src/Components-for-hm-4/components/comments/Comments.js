import {useEffect, useState} from "react";
import {getCommentsofUser} from "../../servises/API-for-users/Api-for-users";
import Comment from "./Comment";

export default function Comments({id}){
let [comments, setComments] = useState([])
    useEffect(()=>{
        getCommentsofUser(id).then(value => {
            setComments([...value.data])
        })
    },[])

    return(
<div>
    {
        comments.map(value => <Comment item={value}/> )
    }
</div>
)}
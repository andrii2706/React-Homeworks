import React, {useEffect, useState} from 'react';


import Comment from "./Comment";
import {getComments} from "../api/API";

export default function Comments(props) {
   let [comments, setComments] = useState([]);
   useEffect(()=>{
       getComments().then((value => {
           setComments(value.data)
       }))
   },[])

    return (
        <div>
            {
                comments.map(value => <Comment item={value}/>)
            }

        </div>
    );
}
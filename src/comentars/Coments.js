import {useEffect, useState} from "react";
import Coment from "./Coment";

export default function Coments(){
    const [comments, setComments] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value =>{
            setComments([...value])
        });



    // useEffect

    return(
        <div>

            {

                comments.map(value =>  <Coment item={value}/>)


            }

        </div>
    )
}


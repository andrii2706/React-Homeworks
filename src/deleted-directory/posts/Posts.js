import Post from "./Post";
import React, {useEffect, useState} from 'react'

export default function Posts({id}){

        const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => setPosts(value))
        },[])

    let filter = posts.filter(value => value.userId === id);



        return(

            <div>


                {
                    filter.map(value => <Post item = {value}/>)

                }



            </div>
        )
    }

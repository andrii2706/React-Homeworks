import logo from './logo.svg';
import './App.css'

import {useEffect, useState} from "react";
import {getPosts} from "./api/API";
import Posts from "./posts-hm-2/Posts";


function App() {
    let[posts,setPosts ] = useState([])
    useEffect(()=>{

        getPosts().then(response =>{
            setPosts(response.data)
            console.log(response);
        })


    }, [])
  return (
   <div>
        

       <Posts items={posts}/>
   </div>
  );
}

export default App;

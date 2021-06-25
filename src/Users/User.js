import {useEffect, useState} from "react";
import {getUserPosts} from "../api/API";

export default function User({item}){
    const [postsUser, setPostsUser] = useState([]);
    const [toggle, setToggle] = useState(false);

    const getPosts = (id) => {
        setToggle(!toggle);
        getUserPosts(id).then(value => setPostsUser(value.data))
    }
    // console.log(postsUser);
    return(
        <div>
            <h2>
                {item.id}
            </h2>
            <h3>
                {item.name} - {item.username}
            </h3>
            <p>
                {item.email}
            </p>
            <button onClick={() => getPosts(item.id)}>Enter</button>
            <ul>
                {toggle && postsUser.map(value => <li>{value.title}</li>)}
            </ul>
            <hr/>
        </div>
    )
}
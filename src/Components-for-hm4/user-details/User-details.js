import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {getUser} from "../servises/API";
export default function UserDetails(){
let [user, setUser] = useState({})
    // eslint-disable-next-line no-undef
    let {id} = useParams();
useEffect(() =>{
    getUser(id).then(value => setUser({...value.data}));
})
    return(
<div>

    {user.id} - {user.username}

</div>
)}
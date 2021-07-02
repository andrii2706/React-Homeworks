import {useEffect, useState} from "react";

export default function UserDetails2(props){

    let {location:{state}} =props
    let [user, setUser] = useState({});
    useEffect(()=>{
        setUser({...state});
    },[state])

    return(
<div>
    {user.username}
</div>
)}
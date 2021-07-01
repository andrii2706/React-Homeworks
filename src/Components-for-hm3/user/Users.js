import {useEffect, useState} from "react";
import {getUsers} from "../api/API";
import User from "./User";



export default function Users(props){

    let[users, setUsers] = useState([]);
    useEffect(
        ()=>{
            getUsers().then(value => {
                setUsers(value.data)
            })
        },[])


return(
<div>
    {
        users.map(value => <User item={value}/>)   }
</div>
)}
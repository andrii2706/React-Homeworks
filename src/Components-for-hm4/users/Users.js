import {useState,useEffect} from "react";
import {getUsers} from "../servises/API";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/User-details";
export default function Users(){
let [users, setUsers] = useState([]);
useEffect(()=>{
getUsers().then(value => setUsers([...value.data]))
})

    return(
<div>
    {
        users.map(value => <User key={value.id} item={value}/>)
    }

    <Switch>
        <Route path={'/users/:id'} component={UserDetails}/>
    </Switch>
</div>
)}
import {useEffect, useState} from "react";
import {getUser} from "../api/API";
import User from "./User";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUser().then(value => {
            setUsers([...value.data])

        })
    }, [])

    return (
        <div>
            {
                users.map(value => <User item={value}/>)
            }
        </div>
    )
}
import User from './User'

import React, {useEffect, useState} from 'react'

export default function Users (){

    const [users, setUsers] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers ([...value])
            })
    },[])



    return(

        <div>


            {
                users.map(value => <User item = {value}/>)

            }



        </div>
    )
}
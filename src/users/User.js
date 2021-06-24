
import Post from "../posts/Post";
import Posts from "../posts/Posts";
export default function User ({item:{id, name}}){

    return (

        <div>
            <h2>{name} - {id} </h2>
            {/*    <p>{username}</p>*/}
            {/*<h3>{address}</h3>*/}


            <Posts id={id}/>

        </div>
    )
}
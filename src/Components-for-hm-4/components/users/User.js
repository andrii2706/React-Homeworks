import {Route, Link} from "react-router-dom";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function User({item}){
return(
<div>
<h2>{item.id}</h2>

    <h3>{item.name} --- {item.username}</h3>
    <p>
        {item.email}
    </p>

    <ul>
        <li>
           <Link to={'/users/'+ item.id+'/posts'}>your posts</Link>
        </li>
        <li>
            <Link to={'/users/'+item.id+'/comments'}>your comments</Link>
        </li>
    </ul>

        <Route path={'/users/' + item.id + '/posts'} render={(props) => {
            return <Posts id={item.id}/>
        }
        }
        />
    <Route path={'/users/'+item.id+'/comments'} render={(props)=>{
        return <Comments id={item.id}/>
    }
    }/>
</div>
)}

import {Route,Link,} from "react-router-dom";
import UserDetails from "../user-details/User-details";
export default function User({item}){
return(
<div>
    <h2>
        {item.id}
    </h2>
    <h3>{item.name} --- {item.username}</h3>
    <p>
        {item.email} ----  <Link to={'/users/' + item.id}>your info</Link>
    </p>
    <Route path={'/users/:id'} component={UserDetails}/>
</div>
)}
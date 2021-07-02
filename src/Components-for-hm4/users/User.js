import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
export default function User({item}){
return(
<div>
    <h2>
        {item.id}
    </h2>
    <h3>{item.name} --- {item.username}</h3>
    <p>
        {item.email} ---- <Link to={'/users/'+ item.id}> </Link>
    </p>
</div>
)}
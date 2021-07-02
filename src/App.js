import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import './App.css';
import Users from "./Components-for-hm4/users/Users";


function App() {
    return (
     <div>
<Router>
    <div><Link to={'/users'}>user page</Link></div>


<Switch>
    <Route path={'/users'} component={Users}/>

</Switch>

</Router>
     </div>
    );
}

export default App;

import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import './App.css';

import Users from "./commponents for prectise -4/users/Users";



function App() {
// let [toggle, setToggle] = useState(false)
//     const onToggle = () => setToggle(!toggle)
    return (
        <Router>
        <div>

                <Link to={'/users'}>click here</Link>
                <Switch>

                    <Route path={'/users'} render={(props)=>{
                        return <Users {...props}/>
                    }}/>
                </Switch>


        </div>

        </Router>
        )
}

export default App;

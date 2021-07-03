import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Users from "./Components-for-hm-4/components/users/Users";


function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/users'}>click here</Link></div>
                <Switch>
                    <Route path={'/users'} render={(props) => {
                        return <Users {...props}/>
                    }}/>

                </Switch>
            </div>
        </Router>

    );
}

export default App;

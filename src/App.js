import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import './App.css';
import Users from "./Components-for-hm3/user/Users";
import Posts from "./Components-for-hm3/posts/Posts";
import Comments from "./Components-for-hm3/comments/Comments";


function App() {
    return (
        <Router>
            <div>
                <div><Link to={"/"}>home page</Link></div>
                <div><Link to={"/users"}>user page</Link></div>
                <div><Link to={"/posts"}>posts page</Link></div>
                <div><Link to={"/comments"}>comments page</Link></div>

            </div>

            <Switch>
                <Route exact path={"/"} render={() => <div>
                    Hello It is a first page
                </div>}/>
                <Route path={"/users"} render={(props) => {
                    console.log(props);
                    return <Users{...props}/>
                }}/>
                <Route path={"/posts"} render={(props) => {
                    console.log(props);
                    return <Posts{...props}/>
                }}/>
                <Route path={"/comments"} render={(props) => {
                    console.log(props);
                    return <Comments{...props}/>
                }
                }/>


            </Switch>


        </Router>
    );
}

export default App;

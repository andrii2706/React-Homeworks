import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import './App.css';


function App() {
  return (
      <Router>
          <div>
              <div><Link to={"/"}>home page</Link></div>
                <div><Link to = {"/users"}>user page</Link></div>
                <div><Link to = {"/posts"}>posts page</Link></div>
                <div><Link to = {"/comments"}>comments page</Link></div>

          </div>

          <Switch>
            <Route exact path={"/"} render={() => <div>
                Hello Okten
            </div>}/>
              <Route path={"/users"} />
              <Route path={"/posts"} />
              <Route path={"/comments"} />



          </Switch>




      </Router>
  );
}

export default App;

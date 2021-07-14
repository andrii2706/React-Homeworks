import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/"/>
                <Route  path="/"/>
            </Switch>
        </div>
    );
}

export default App;



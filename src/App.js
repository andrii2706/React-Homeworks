import React from "react";

import "./App.css";
import {MovieStates} from "./components/Context/MovieContex";
import Heros from "./components/Hero/Heros";

const App = () => {
    return (
       <div>
    <MovieStates>
        <Heros/>
    </MovieStates>
       </div>
    );
};

export default App;
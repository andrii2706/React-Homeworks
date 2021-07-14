import './App.css';
import Heros from "./components/Hero/Heros";
import MovieState from "./Context/MovieContex";

function App() {
    return (
        <MovieState>
            <Heros/>
        </MovieState>

    );
}

export default App;



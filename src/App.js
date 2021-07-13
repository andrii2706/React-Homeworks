import './App.css';
import './css-files/headers-style.css'
import Header from "./header/Header";
import MovieList from "./movie-lists/MovieList";
import Pagination from "./pagination/Pagination";



function App() {
    return (
        <div>
            <Header/>
            <MovieList/>
            <Pagination
                MovieForPage={MovieForPage}
                totalMovies={movies.length}
            />
        </div>
    );
}

export default App;

import {useEffect, useState} from "react";
import MovieListCard from "./MovieListCard";
import {getMovies} from "../servises/Movies-API";

export default function MovieList() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        getMovies().then(value => {
            setMoviesList([...value.data.results])
        })
    }, [])


    return (
        <div>
            {
                moviesList.map(value => <MovieListCard item={value}/>)
            }

        </div>
    )
}
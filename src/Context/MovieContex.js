import {createContext, useEffect, useState} from "react";
export const MovieContex = createContext()
    export default function MovieState({children}){

    const API_KEY =
        'e310fe0f656d3a88cc1487c87d6c6aa5';

        const [hiddenMenu, setHiddenMenu]= useState(true);
        const [activeLink, setActiveLink] = useState("Popular");
        const [popularMovies, setPopularMovies] = useState([]);

        const getPopularMovies =async ()=>{
        const popularMoviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1')
    const poppularMoviesData =await popularMoviesResponse.json()
            setPopularMovies(poppularMoviesData)
        }

useEffect(()=>{
    getPopularMovies();
},[])

        return(
            <div>
                <MovieContex.Provider value={{hiddenMenu, setHiddenMenu,activeLink, setActiveLink,popularMovies, setPopularMovies}}>
                    {children}
                </MovieContex.Provider>
            </div>
        )
    }


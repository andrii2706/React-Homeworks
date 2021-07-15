import {createContext, useEffect, useState} from "react";
export const MovieContex = createContext()
    export default function MovieState({children}){
        const API_KEY =
            'e310fe0f656d3a88cc1487c87d6c6aa5';

        const [hiddenMenu, setHiddenMenu]= useState(true);
        const [activeLink, setActiveLink] = useState("Popular");
        const [popularMovies, setPopularMovies] = useState([]);
        const [showPagination, setShowPagination] = useState(true);
        const [isLoading, setIsLoading] = useState(false)
        const [movies, setMovies] = useState([])
        const [search, setSearch] = useState("")
        const [page, setCurrentPage] = useState(1)

        const getPopularMovies =async ()=>{
            const popularMoviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e310fe0f656d3a88cc1487c87d6c6aa5&language=en-US&page=1')
            const poppularMoviesData =await popularMoviesResponse.json()
            setPopularMovies(poppularMoviesData)
        }
        const getMovies = async ()=>{
            const response =await fetch(
                '\'https://api.themoviedb.org/3/movie/popular?api_key=e310fe0f656d3a88cc1487c87d6c6aa5&language=en-US&page={page}'
            )
            const data = await response.json()
            if (search.trim() === "") {
                setMovies(data);
            }
        };

        const handleSearch = async (e) => {
            e.preventDefault();
            if (search.trim() === "") {
                return;
            }
            const searchResponse = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
            );
            const searchData = await searchResponse.json();
            setMovies(searchData);
            setShowPagination(false);
        };

        const newPage = (direction) => {
            if (direction === "next") {
                setCurrentPage(currentPage + 1);
                setIsLoading(true);
            } else if (direction === "previous" && currentPage !== 1) {
                setCurrentPage(currentPage - 1);
            }
        };
        useEffect(()=>{
            getPopularMovies();
        },[])

        useEffect(() => {
            if (search.trim() === "") {
                setShowPagination(true);
            }
            getMovies();
        }, [search, currentPage]);

        useEffect(() => {
            const loadingTimeout = setTimeout(() => {
                setIsLoading(false);
            }, 1300);
            return () => clearTimeout(loadingTimeout);
        }, [movies, currentPage]);
        return(
            <div>
                <MovieContex.Provider value={{ movies,
                    setMovies,
                    search,
                    setSearch,
                    activeLink,
                    setActiveLink,
                    handleSearch,
                    currentPage,
                    setCurrentPage,
                    newPage,
                    showPagination,
                    setShowPagination,
                    isLoading,
                    setIsLoading,
                    popularMovies,
                    setPopularMovies,
                    hiddenMenu,
                    setHiddenMenu,}}>
                    {children}
                </MovieContex.Provider>
            </div>
        )
}






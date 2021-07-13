import axios from "axios";
const key = '?api_key=e310fe0f656d3a88cc1487c87d6c6aa5&language=en-US'
const infoIntance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
 })
const getMovies = (page) => infoIntance('/discover/movie'+ key + '&page='+ page);
const getMovie = (id) => infoIntance('/movie/'+id+ key);
const getMovieGener = () => infoIntance('/gener/movie/list'+ key);
////////////////////////////////////////////////////////////////





export {getMovies, getMovie, getMovieGener}
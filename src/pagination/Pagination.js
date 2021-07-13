import MoviePage from "../Movie-page/Movie-page";

export default function Pagination(){
const pagination = ({MovieForPage, totalMovies}) =>{
    const pageNumber = []
    for (let i=1; i < Math.ceil(totalMovies/MovieForPage); i++){
        pageNumber.push(i)
    }
}
    return(
<div>
    <div>
        {
            pageNumbers.map(number =>(
                <MoviePage key={number}/> {number}))
        }
    </div>
</div>
)}
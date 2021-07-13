import "../css-files/headers-style.css"

export default function MovieListCard({item}){
return(
<div>
    <div className="flex">
        <div className="block width25 border">
            <img className="photos" src={'https://image.tmdb.org/t/p/w300/' + item.poster_path} alt=""/>
            <h2>{item.title}</h2>
            <p>{item.overview}</p>
        </div>
    </div>
</div>
)}
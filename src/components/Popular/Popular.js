import {useContext} from "react";
import {MovieContex} from "../../Context/MovieContex";
import Conteiner from "../reuseComponents/Conteiner";
import {css} from "@emotion/css";

export default function Popular(){
    const {popularMovies} = useContext(MovieContex)
return(
    <div css={styles} className="popularMovies">
        <Conteiner>
            {popularMovies.results &&
            popularMovies.results.map((popularMovieItem, index) => (
                <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
                    alt="poster"
                />
            ))}
        </Conteiner>
    </div>
)}
const styles = css`
width: 100%;
  .container{
    &:nth-child(1){
      height: 81vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
    img{
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
    }
  }
  @media (max-width: 600px){
    .container{
      img{
        max-width: 100%;
        height: 500px;
      }
    }
  } @media (min-width: 601px) and (max-width: 854px){
    .container{
      img{
        max-width: 40%;
        
      }
    }
  } @media (min-width: 855px) and (max-width: 1144px){
    .container{
      img{
        max-width: 31%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1365px){
    .container{
      img{
        max-width: 23.4%;
      }
    }
  }
`
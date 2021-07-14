import {useContext} from "react";
import {MovieContex} from "../Context/MovieContex";
import Popular from "../components/Popular/Popular";
import Conteiner from "../components/reuseComponents/Conteiner";

export default function Output(){
const {activeLink} =  useContext(MovieContex)
    return(
<div className={'output'}>
    {
        activeLink === "Popular" &&(
            <Conteiner>
                <Popular/>
            </Conteiner>)
    }
</div>
)}
// const styles = css`
//   width: 100%;
//   min-height: calc(100vh - 80px);
//   display: flex;
//   > .container {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
//   }
//   @media (max-width: 1365px) {
//     > .container {
//       max-width: 90%;
//     }
//   }
// `;
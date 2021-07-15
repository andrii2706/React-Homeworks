import {css, jsx} from "@emotion/react"
import Conteiner from "../reuseComponents/Conteiner";
import HeroNavMenu from "./HeroNavMenu";
import HeroNavLogo from "./HeroNavLogo";
import HeroNavSearch from "./HeroNavSearch";
import {MovieContex} from "../Context/MovieContex";
import {useContext} from "react";
export default function HeroNav(){
    const {hiddenmenu, setHiddenMenu} =useContext(MovieContex)
return(
<nav css={styles}>
    <Conteiner>
 <div className="wrapper">
     <HeroNavLogo/>
     <HeroNavMenu/>
 </div>
        <HeroNavSearch/>
        <i onClick={()=>setHiddenMenu(!hiddenmenu)} id={'burgerMenu'} className={hiddenmenu? "fas fa-bars":"fas fa-times"}></i>
    </Conteiner>

</nav>
)}
const styles =css`
width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: #212229;
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper{
      display: flex;
      align-items: center;
    }
  }
  #bugerMenu{
    color: #f9a5ff;
    cursor: pointer;
    display: none;
  }
@media(max-width: 860px){
  .container{
    #burgerMenu{
      display: block;
    }
  }
}
  @media(max-width: 1365px){
    .container{
      max-width: 90%;
    }
  }
`


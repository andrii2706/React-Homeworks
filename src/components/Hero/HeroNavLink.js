import {css, jsx} from "@emotion/react"
import {useContext} from "react";
import {MovieContex} from "../Context/MovieContex";

export default function HeroNavLink({btnText}){
const {setHiddenMenu, activeLink, setActiveLink}= useContext(MovieContex)
return(
<div>
    <button onClick={()=>{
        setActiveLink(btnText);
        setHiddenMenu(true);
    }}
        css={styles}
    style={{color: activeLink === btnText ? "#f9a5ff":"#fff"}}
    >{btnText}</button>
</div>
)}
  const styles = css`
border: none;
  outline: none;
  background: transparent;
  font-size: 22px;
  margin-right: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  @media(max-width: 860px){
    font-size: 40px;
  }
`
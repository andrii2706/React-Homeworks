import {css, jsx} from "@emotion/css"
export default function HeroNavLink({btnText}){
return(
<div>
    <button css={styles}>{btnText}</button>
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
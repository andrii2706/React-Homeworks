import {css, jsx} from "@emotion/css"
import HeroNav from "./HeroNav";
export default function Heros(){
return(
<div css={styles} className={'hero'}>
    <h4>hello hero</h4>
    <HeroNav/>
</div>
)}

const styles = css`
width: 100%;
  min-height: 100vh;
  background: #1b1c22;
`
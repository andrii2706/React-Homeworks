import { css, jsx } from "@emotion/react";
import HeroNav from "./HeroNav";
import Output from "../Output/Output";
export default function Heros(){
return(
<div css={styles}  className={'hero'}>
    <HeroNav/>
    <Output/>
</div>
)}

const styles = css`
width: 100%;
  min-height: 100vh;
  background: #1b1c22;
`
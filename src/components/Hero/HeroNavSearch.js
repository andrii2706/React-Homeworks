import {css, jsx} from "@emotion/react"

export default function (){
return(
<div>
    <form css={styles}>
        <input type="text" placeholder={'Search fot movies...'}/>
    </form>
</div>
)}

const styles = css`
height: 40px;
  min-height: 40px;
  input{
    outline: none;
    border-radius: 50px;
    border: 1px solid #2c2f39;
    background: transparent;
    padding: 10px 16px;
    width: 260px;
    color: #f9a5ff;
    &::placeholder{
      color: #f9a5ff;
      letter-spacing: 1px;
    }
  }
  @media(max-width: 860px){
    input{
      width: 220px;
    }
  }
`
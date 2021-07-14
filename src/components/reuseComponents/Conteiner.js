import {css, jsx} from "@emotion/css"

const Conteiner = ({children})=>(
    <div css={styles} className={'container'}>
        {children}
    </div>
)
const styles =css`
width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;
export default Conteiner
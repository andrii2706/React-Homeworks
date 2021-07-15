import { css, jsx } from "@emotion/react";
import React, { useContext } from "react";
import {MovieContex} from "../Context/MovieContex.js";
import Movies from "../Movies/Movies.js";
import MoviesPagination from "../Movies/MoviesPagination.js";
import Popular from "../Popular/Popular.js";
import Conteiner from "../reuseComponents/Conteiner.js";

const Output = () => {
    const { activeLink } = useContext(MovieContex);

    return (
        <div css={styles} className="output">
            {activeLink === "All Movies" && (
                <Conteiner>
                    <React.Fragment>
                        <Movies />
                        <MoviesPagination />
                    </React.Fragment>
                </Conteiner>
            )}
            {activeLink === "Popular" && (
                <Conteiner>
                    <Popular />
                </Conteiner>
            )}
        </div>
    );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default Output;
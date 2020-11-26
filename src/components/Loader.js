import React from 'react'
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
  text-align: center
`;

const Loader = () => {
    return (
        <div className="sweet-loading">
            <ScaleLoader
                css={override}
                size={50}
                color={"#123abc"}
                loading={true}
            />
        </div>
    )
}

export default Loader

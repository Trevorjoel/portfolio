import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Spinner } from 'react-bootstrap';
import {ClockLoader} from "react-spinners";
const LoadingContainer = () =>{
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    return (
        <div style={{marginTop:"150px", background:"white", padding: "100px"}}>
        {/*    <Spinner style={{height: "500px", width: "500px", background:"#64B6FF"}} variant="info"  animation="grow" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>//
        */}

            <div className="sweet-loading">
                <ClockLoader
                    css={override}
                    size={150}
                    color={"#214483"}
                /><br/>
                <h2><strong>LOADING!</strong></h2>
            </div>
        </div>
    )
}

export default LoadingContainer;
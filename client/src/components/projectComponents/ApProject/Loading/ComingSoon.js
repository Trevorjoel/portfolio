import React from "react";
import { css } from "@emotion/core";
import {ClipLoader, ClockLoader, PacmanLoader} from "react-spinners";
const LoadingContainer = () =>{
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    return (
        <div style={{marginTop:"0px", background:"white", padding: "30px"}}>
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
                <h2 style={{color: "#214483", fontSize:"1em", textAlign:"center"}}><strong>IN DEVELOPMENT</strong></h2>
                <p style={{color: "#214483", textAlign:"center"}}>Check back soon...</p>
            </div>
        </div>

    )
}

export default LoadingContainer;
import React from "react";
import {Button, NavLink} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";
import {goBackToElement} from "../../functions/MainController";

const backBtn = () => (
    <NavLink activeClassName="" tag={RRNavLink} href="/" exact to="/" >
        <Button className="projects-back-btn" onClick={()=>{
            // This function scrolls to the element defined upon going back
            goBackToElement('projects');
        }}>
            Back</Button>
    </NavLink>
);
export default backBtn;
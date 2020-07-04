import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./SettingsContainer.module.scss";
import Col from "react-bootstrap/Col";

const Buttons = (props) =>{

    return(
        <div>
        <Button className={classes.ButtonReset} variant="secondary" style={{margin: "10px 2%"}}
            onClick={() =>{props.reset()}}>Reset</Button>
    <Button type="submit" className={classes.ButtonEnter} style={{margin: "10px 2%"}} onClick={() =>{props.save()}}>Enter</Button>
        </div>
)
}
export default Buttons;
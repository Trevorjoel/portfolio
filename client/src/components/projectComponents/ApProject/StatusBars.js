import React from 'react';
import {Badge, Col, Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import classes from './StatusBars.module.css'

const StatusBars = (props) => {

    return (<div > <div
         onClick={props.toggleHandler}>
        <Row className={classes.TxtLeft}>

            <Col lg={4} sm={4} xs={4}>
                <div>
                    <Badge
                        className={props.divStyle}>
                        OK
                    </Badge>

                </div>
            </Col>
            <Col lg={4} sm={4} xs={4}>
                {props.statusTitle}
            </Col>

            <Col lg={4} sm={4} xs={4}>
                {props.updatedValue}  {props.symbol}
            </Col>

           {/* <Col lg={4}>
                <h6 >{props.statusTitle}</h6>
            </Col>*/}
        </Row>

        {props.adviceToggle &&
        <div >
            <p data-aos="fade"
               data-aos-delay="0"
               data-aos-duration="1000" className="">{props.adviceText}</p>
            <p data-aos="fade"
               data-aos-delay="0"
               data-aos-duration="1000"> Please see <a href={props.link}> our wiki.</a></p>
            <br/> <Button>Modify alerts</Button><br/>
        </div>
        }

    </div>
     

        
    </div>);
};

export default StatusBars;
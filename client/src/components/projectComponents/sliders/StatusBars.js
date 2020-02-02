import React from 'react';
import {Badge, Col, Row} from "reactstrap";
import Button from "react-bootstrap/Button";


const StatusBars = (props) => {

    return (<div > <div
        className={props.divStyle} onClick={props.toggleHandler}>
        <Row >
            <Col lg={2} >
                <h4>
                    <Badge
                    className="badge-secondary-override">
                    {props.updatedValue}  {props.symbol}
                    </Badge>
                </h4>
            </Col>
            <Col lg={10}>
                <h4 >{props.statusTitle}</h4>
            </Col>
        </Row>
    </div>
     
        {props.adviceToggle &&
     <div >
           <p data-aos="fade"
              data-aos-delay="0"
              data-aos-duration="1000" className="alert">{props.adviceText}</p>
         <p data-aos="fade"
            data-aos-delay="0"
            data-aos-duration="1000"> Please see <a href={props.link}> our wiki.</a></p>
    <br/> <Button>Switch off alerts</Button><br/>
     </div>
        }
        
    </div>);
};

export default StatusBars;
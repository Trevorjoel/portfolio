import React, {useState, useRef} from "react";
import {Content, Panel, LinkList, ListHeader,HorizontalList, Header, Overlay} from 'wikipedia-react-components'
import classes from "./AdviceContainer.module.css";
import Chevron from "./Chevron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdviceWiki = (props) => {
    const [setActive, setActiveState] = useState(props.activate);
    const [setDisplay, setDisplayState] = useState(props.translate);
    const [setHeight, setHeightState] = useState(props.height);
    const [setRotate, setRotateState] = useState(props.rotate);

    const content = useRef(null);

    function toggleContent(props) {
        setActiveState(setActive === "" ? classes.active : "");
        setHeightState(setActive === classes.active ? "0px" : `500px`)
        setDisplayState(setActive === classes.active ? "translateY(0)" : `translateY(0vh)`)
        setRotateState(
            setActive === classes.active ? classes.NoRotate : classes.Rotate
        )
    }
    return (
        <div className={classes}>
            <Row>
                <Col lg={2}>
            <button className={[classes.Button, setActive].join(' ')}
                    onClick={toggleContent}>
                <strong>  <h4 className={classes.Flex} id="">{props.title}
                    <Chevron className={[classes.Icon, `${setRotate}`].join(' ') } fill={'#777'} height="20px"/></h4></strong>
            </button>
            <div ref={content} style={{maxHeight:`${setHeight}`}} className={classes.Content}>
                {props.sub}{props.sub1}{props.sub2}{props.sub3}{props.sub4}{props.sub5}
            </div>
                </Col>
                <Col lg={10}>
<p>Content</p>
            </Col>
            </Row>
        </div>
    )



}

export default AdviceWiki;
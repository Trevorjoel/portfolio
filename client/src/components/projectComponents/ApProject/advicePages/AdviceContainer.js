import React, {useState, useRef} from "react";
import classes from './AdviceContainer.module.scss';
import AdviceWiki from "./AdviceWiki";
import Logo from "../Assets/logos/logo-02.png";



const AdviceContainer = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setDisplay, setDisplayState] = useState('translateY(0)');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState(classes.NoRotate);

    const content = useRef(null);

    function toggleContent(props) {
        setActiveState(setActive === "" ? classes.active : "");
        setHeightState(setActive === classes.active ? "0px" : `680px`)
        setDisplayState(setActive === classes.active ? "translateY(0)" : `translateY(0vh)`)
        setRotateState(
            setActive === classes.active ? classes.NoRotate : classes.Rotate
        )
    }
    return (
        <div id="advice" className={classes.Container}>
            <button className={[classes.Button, setActive].join(' ')}
                    onClick={toggleContent}>
                <strong>    <h3 className={classes.Flex} style={{textAlign: "center", padding:"5px 0px 0px 0px"}} id="">View Advice
                    <img style={{width:"60px", padding:"0px"}} className={[classes.Icon, `${setRotate}`].join(' ') }  src={Logo}/>  {/*<Chevron className={[classes.Icon, `${setRotate}`].join(' ') } fill={'#777'} height="30px"/> */} </h3> </strong>
            </button>

            <div ref={content} style={{maxHeight:`${setHeight}`}} className={classes.Content}>
                <AdviceWiki
                />
            </div>



        </div>
    )

}

export default AdviceContainer;
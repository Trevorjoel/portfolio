import  {Button, Modal, Row, Col} from 'react-bootstrap';
import React, {useState} from "react";
import classes from './SlidersModal.module.css'
import Rpi from '../Assets/pi-power.png';
import Sensors from '../Assets/AP-7000-Sleeve-On-1024x446_1.jpg'
function SlidersModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
<div className={classes.Center}>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-hcenter"

                className={classes.Content} show={show} onHide={handleClose}  >
                <Modal.Header className={classes.Body} closeButton>
                    <Modal.Title className={classes.Title}>ALERT</Modal.Title>
                </Modal.Header >
                <Modal.Body  className={classes.Body}><p>The sliders you are about to see are for development and demonstration of the app.
                <br/></p>
                    <p>These values will come from water quality sensors connected to a computer which sends data to a central server.</p>
                    <Row style={{margin: "20px 0"}}><Col><img style={{width: "80%"}} src={Sensors} /> </Col><Col><img style={{width: "80%"}} src={Rpi} /></Col></Row>

                    <p> They <strong>ARE NOT</strong> in the final project. -The readings come from the probes in the water.<p/>
                           <p>They <strong>ARE NOT</strong> the same as the "View historical data" section.</p>
                </p><p><strong>So how to use them?</strong></p>
                    <p>Move the values in the sliders up and down and check the changes in the "Current Status" section.
                        <br/>Take note of the alerts, these would be sent to your telephone.<br/><br/>
        <p><strong>Alerts</strong> come in three categories and are triggered when the probes detect readings in certain ranges related
                        to the needs of the selected fish or user entered settings:<br/><br/>
                       <strong> 1) Optimal <br/></strong> This is the range where you are aiming to keep your system parameters.<br/>
                        At these ranges your fish are most comfortable.<br/>
                        <strong>   2) Advice <br/> </strong>The alerts for this range indicate your system has shifted out of the optimal
                        range higher or lower and attention should be given to preventing it moving further to the next alert level.<br/>
                        <strong>  3) Critical alert <br/> </strong>This alert range indicates a real danger to the balance of the system,
                        mostly a danger to the fish species stocked in the system.<br/>
                        <br/>Click on the "Current Status" bars to get information and advice tailored to what the probes are
                        reading about the water quality.</p>
                    </p>
                </Modal.Body>
                <Modal.Footer className={classes.Body}>
                    <Button variant="secondary" onClick={handleClose}>
                      GOT IT!
                    </Button>
                </Modal.Footer>
            </Modal>
</div>
        </>
    );
}

export default SlidersModal;
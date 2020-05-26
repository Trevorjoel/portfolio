import {Button, Modal} from 'react-bootstrap';
import React, {useState} from "react";
import classes from './SlidersModal.module.css'

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
                    <Modal.Title className={classes.Title}>CONFUSION ALERT</Modal.Title>
                </Modal.Header >
                <Modal.Body  className={classes.Body}><p>The sliders you are about to see are for development and demonstration of the app.
                <br/>They are a substitute
                for information coming from water quality probes.</p>
                    <p>I wrote a little program to get changeable data for programming and show off how the app will work.</p>
                       <p> They <strong>ARE NOT</strong> in the final project. -The readings come from the probes in the water.<p/>
                           <p>They <strong>ARE NOT</strong> the same as the "System History" section. -The system will record hourly
                               readings and the data will be presented in graphs for the user to make sense of.</p>
                </p><p><strong>So how to use them?</strong></p>
                    <p>Basically move the values up and down and check the changes in the "Live Monitor" section.
                        <br/>Take note of the alerts, these would be sent to your telephone.
                        <br/>Click on the "System Status" bars to get information and advice tailored to what the probes are reading about the water quality.</p>

                <p>As you're moving the sliders imagine the numbers are from the probe detecting changes in the water, such as an increase in water temperature.</p>
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
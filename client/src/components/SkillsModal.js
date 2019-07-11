/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader,  ModalFooter } from 'reactstrap';
import SkillsTabs from './SkillsTabs';
class SkillsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    render() {
        return (
            <div>
                <div className="button-wrapper">
                <Button block className="skills-button"  color="success" size="lg" onClick={this.toggle}>{this.props.buttonLabel}    Skills & Experience    </Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Skills!</ModalHeader>
                  
                        <SkillsTabs />
                    
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SkillsModal;
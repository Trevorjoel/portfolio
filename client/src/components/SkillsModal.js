/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal,  ModalFooter } from 'reactstrap';
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
                <div  id="skills" className="button-wrapper">
                <Button block className="skills-button"  color="success" size="lg" onClick={this.toggle}>{this.props.buttonLabel}    Skills & Experience</Button>
                
                </div>
              
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    
                  
                        <SkillsTabs />
                    
                    <ModalFooter>
                        
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SkillsModal;
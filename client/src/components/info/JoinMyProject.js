import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


import logo from "../../images/Sign96x96.png";

const JoinMyProject = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Button className="dropdown-1" onClick={toggle} style={{ marginBottom: '1rem' }} size="lg" block><h4>Join My Project</h4></Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p><strong>We should all do our bit to make the world a better place.</strong></p>
                        <p> My project combines my two passions of software development and food production/food security into one awesome idea the
                            <strong> 'Aquaponics System Monitor'</strong>.</p>
                        <p> This project requires a broad range of skills and efforts from electrical engineering and programming to intellectual
                            property expertise and marketing.</p>
    
                        <p>  <strong>I am currently seeking passionate people who care about the environment and would like to decentralise the way fresh food
                            is distributed in society to join my team. </strong></p>
    
                        <p> The project has the <strong>potential to make money and partnerships are possible</strong> after a prototype is built however primary motivation (today) is passion and problem-solving.</p>
                      <p><strong>Read more about it and sign up:<a target="_blank" rel="noopener noreferrer" title="My blog site!" className=""
                                             href="https://fullstack-adventure.com/aquaponics-system-monitor/">
                                <img alt="Trevor Joel" className="App-logo footer-icons" src={logo}/>
                            </a>
                      </strong>     </p>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default JoinMyProject;

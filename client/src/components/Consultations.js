import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Consultations = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Button className="dropdown-1" onClick={toggle} style={{ marginBottom: '1rem' }} size="lg" block><h4>Free small business consultations</h4></Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                       <p> <strong>I can provide free consultations</strong> for small to medium businesses owners and individuals
                            on their requirements for digital solutions to their business needs. If I can help I will offer to build the site you need.
                       </p>
                       <p>We can cover questions like:</p>
                        <ul>
                            <li> Do you even need a site? </li>
                            <li> Will your business make more money with one? </li>
                            <li> What are the costs of building the site? </li>
                            <li> How to bring people to your site? </li>
                            <li> Are you prepared to maintain a site and put in the effort to get people using it? </li>
                        </ul>
                        <p>
                        <strong>I’m willing to help out for free.</strong>
                </p>
                        <p>
                            Business owners from Northcliffe area with a decent business model can get priority and cheaper prices.
                            I'd love to help stimulate the economy in the area.</p>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default Consultations;

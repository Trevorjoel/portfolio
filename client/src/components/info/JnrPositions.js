import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const JnrPositions = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Button className="dropdown-2" onClick={toggle} style={{ marginBottom: '1rem' }} size="lg" block><h4>Junior Development positions</h4></Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p><strong>IT IS TIME!</strong></p>
                        <p> After over four years of experimenting with various stacks, completing various courses, building sites and improving
                           auxiliary skills. I've decided to settle in on the <strong>JavaScript stack, Node, Express, React and of course JavaScript.</strong>
                        </p>
                           <p> My main focus of this broad area is <strong>building awesome user interfaces</strong> while also picking up and applying
                               <strong> knowledge that levels up my back-end abilities.</strong>
                           </p>
                               <p> Joining a company with a team of awesome dev's who would love to help me improve would
                               create a great relationship where <strong>I would give 110% back to add value to your company.</strong>
                               </p>
                        <p>If you like what you're seeing, go ahead and check my code <strong>I will be delighted when you get in touch.</strong>
                        </p>

                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default JnrPositions;

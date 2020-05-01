import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const SiteBuilding = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Button className="dropdown-2" onClick={toggle} style={{ marginBottom: '1rem' }} size="lg" block><h4>Freelance site building</h4></Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                       <p><strong> For your small and medium business needs I can design, plan and develop</strong>  static sites that are simple, and cheap.
                        They contain information about your business and show contact details.</p>
    
                        <p>For more functional sites with mailing lists, online sales, blogs, bookings and anything else you might need
                            I can offer sites built with Content Management Systems or 'CMS'.</p> <p><strong> A CMS is designed, developed
                        and set up in such a way that you won’t need any real technical knowledge to maintain and improve them on your own, reducing or eliminating any ongoing costs.</strong> </p>
                        <p>All aspects from setting up your domain to design and training can be taken care of.</p>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
};

export default SiteBuilding;

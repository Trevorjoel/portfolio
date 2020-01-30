import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const SEOMarketing = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Button className="dropdown-1" onClick={toggle} style={{ marginBottom: '1rem' }} size="lg" block><h4>Search Engine Optimisation and digital marketing</h4></Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p><strong> What good is a website with no traffic or a product with no sales?</strong> </p>
    
                            <p>There are a few strategies I offer to make sure that your site does not fall into the ether of internet obscurity.</p>
    
                                <p><strong>Search Engine Optimisation</strong>  or 'SEO' is the art of getting your website to show higher in search results,
                                    like Google, to drive traffic to your site.</p>
    
                                    <p><strong>Search Engine marketing</strong>  is ensuring your products show in search results when potential customers use a search engine to look for products.</p>
    
                                        <p><strong>Social media integration, management and advertising</strong> gets user engagement from social media platforms.</p>
                                            <p> <strong>Email marketing and mailing lists</strong> keeps your users updated on your site, product or service.</p>
                                                <p><strong>Analytics</strong>  collects useful information about how users interact with your site or product.
                                                    This is critical information about how our strategy is working.</p>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default SEOMarketing;

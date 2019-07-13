import logo from '../images/Sign96x96.png';
import React, { Component } from 'react';
import { Link} from "react-scroll";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            newState: ''
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
       
        return (
            <div className="shadow">
                <Navbar light expand="md" >
                    <Link
                        activeClass="active"
                        to="top"
                        spy={true}
                        smooth={true}
                        offset={-5000}
                        duration= {500}
                    >
                        <NavbarBrand href="/"><img alt="Trevor logo" className="App-logo" src={logo}/>Trevor
                            Joel</NavbarBrand>
                    </Link>
                   
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="introduction"
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration= {500}
                                >
                                <NavLink href="/components/">Introduction</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration= {500}
                                >
                                    <NavLink href="/components/">Skills</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration= {500}
                                >
                                    <NavLink href="/components/">Projects</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >
                                    <NavLink href="/components/">Contact</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://fullstack-adventure.com">Blog</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            
            
            
        );
    }
}
export default NavBar;
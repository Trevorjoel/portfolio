import logo from '../images/Sign96x96.png';
import React, { Component } from 'react';
import { Link} from "react-scroll";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';



/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
};

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
                <Navbar id="navbar" light expand="md" >
                    <Link
                        
                        to="top"
                        spy={true}
                        smooth={true}
                        offset={-5000}
                        duration= {1000}
                    >
                        <NavLink tactiveClassName="" tag={RRNavLink} exact to="/" >
                            <NavbarBrand href="/" title="Back to top"><img alt="Trevor logo" className="App-logo" src={logo}/></NavbarBrand>
                        </NavLink>
                    </Link>
                   
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link
                                   
                                    activeClass=""
                                    to="introduction"
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration= {500}
                                >
                                <NavLink activeClassName="" tag={RRNavLink} exact to="/"   href="/">Introduction</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                   
                                    activeClass=""
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration= {500}
                                >
                                    <NavLink activeClassName="" tag={RRNavLink} exact to="/" href="/">Skills</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    exact
                                    activeClass=""
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration= {500}
                                >
                                    <NavLink activeClassName="" tag={RRNavLink} href="/" exact to="/" >Projects</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    exact
                                    activeClass=""
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >
                                    <NavLink activeClassName="" tag={RRNavLink}  href="/" exact to="/" >Contact</NavLink>
                                </Link>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            
            
            
        );
    }
}
export default NavBar;
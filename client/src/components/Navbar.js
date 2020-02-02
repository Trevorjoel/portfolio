import logo from '../images/Sign96x96_white.png';
import React, {Component} from 'react';
import {Link} from "react-scroll";
import {NavLink as RRNavLink} from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */



class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            newState: ''
        };
    }
    componentDidMount() {
        let position = "navbar";
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById(position).style.top = "0";
            } else {
                document.getElementById(position).style.top = "-100%";
            }
            prevScrollpos = currentScrollPos;
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
                <Navbar id="navbar" light expand="md">
                    <Link
                        
                        to="navbar"
                        spy={true}
                        smooth={true}
                        offset={-5000}
                        duration={1000}
                    >
                        
                        <NavbarBrand
                            data-aos="fade-down-right"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            tactiveClassName="" tag={RRNavLink} exact to="" href="/" title="Back to top"><img
                            alt="Trevor logo" className="App-logo" src={logo}/></NavbarBrand>
                    
                    </Link>
                    
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link
                                    
                                    activeClass=""
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration={500}
                                >
                                    <NavLink
                                        data-aos="fade-up-right"
                                        data-aos-delay="00"
                                        data-aos-duration="800"
                                        activeClassName="" tag={RRNavLink} exact to="/" href="/">Tools &
                                        Experience</NavLink>
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
                                    duration={500}
                                >
                                    <NavLink
                                        data-aos="fade-up-left"
                                        data-aos-delay="0"
                                        data-aos-duration="800"
                                        activeClassName="" tag={RRNavLink} href="/" exact to="/">Projects</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    exact
                                    activeClass=""
                                    to="info"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <NavLink
                                        data-aos="fade-down"
                                        data-aos-delay="0"
                                        data-aos-duration="800"
                                        activeClassName="" tag={RRNavLink} href="/" exact to="/">Info</NavLink>
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
                                    duration={500}
                                >
                                    <NavLink
                                        data-aos="fade-left"
                                        data-aos-delay="0"
                                        data-aos-duration="800"
                                        activeClassName="" tag={RRNavLink} href="/" exact to="/">Contact</NavLink>
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
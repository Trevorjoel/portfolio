import logo from '../images/Sign96x96.png';
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
                    <NavbarBrand href="/"><img alt="Trevor logo" className="App-logo" src={logo}/>Trevor
                        Joel</NavbarBrand>
                   
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Introduction</NavLink>
                            </NavItem>
                            
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Projects
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                   
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/components/">Contact</NavLink>
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
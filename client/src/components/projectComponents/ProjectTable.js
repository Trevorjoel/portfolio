/*
Main file for the employee table project

*/

import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import employeesImg from '../../images/Employees-together1087x250.jpg';
import github from "../../images/github_PNG2.png";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

class ProjectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryBody: [],
            toggleFirstName: false,
            toggleLastName: false,
            toggleEmployeeID: false,
            toggleDeptID:false
        };
    }
    
   
    // Set the queryBody state upon mounting
    componentDidMount() {
        this.queryDB()
            .then(res => this.setState({queryBody: res.database1}))
            .catch(err => console.log(err));
    }
    
    // Request api
    queryDB = async () => {
        const response = await fetch('/api/sql');
        const query = await response.json();
        if (response.status !== 200) throw Error(query.message);
        
        return query;
    };
    
    // Create and render delete buttons for the database rows
    toDelete = function (empID) {
        // Ensure not all entries can be deleted
       
            return <Button name={empID} onClick={async () => {
                console.log('Button clicked');
                const results = await fetch('/api/sql', {
                    method: 'DELETE',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            id: empID
                        }
                    )
                });
                const body = await results.json()
                // Set state
                    .then(res => this.setState({queryBody: res.database2})) // todo: This causes the list to refresh to default to sb structure
            }
            } title="Remove" color="danger">Remove</Button>;
    };
    
    render() {
        return (
            <div className="project-inner-wrapper">
                <Image className="project-modal-img img-rounded" src={employeesImg} fluid/>
                
                <h3>You have some CRUD employees!</h3><br/>
                <p className="card-text">Here's a little example of the basic CRUD operations.
                    <br/>Create Read update, delete and sort employees in a database.
                </p>
                <strong>List of company employees.</strong>
                <Table className="employee-table" striped bordered dark hover responsive>
                    <thead>
                    <tr>
                        <th>
                            <Button id={"uniqueID"}
                                    onClick={() =>
                                        this.handleSortById(this.state.toggleEmployeeID, 'employeeID')}
                                        value="employeeID"
                                        className="sort-table"
                                        title="Reverse the id's"> ID
                            </Button>
                        </th>
                        <th>
                            <Button id="sort-by-last-name"
                                    onClick={() => this.handleSortByTxt('lastName')}
                                    ref=""  onMouseOver=""
                                    className="sort-table"
                                    title="Sort alphabetically">Last Name
                            </Button>
                        </th>
                        <th>
                            <Button  id="sort-by-first-name"
                                     onClick={() => this.handleSortByTxt('firstName')}
                                     ref="" onMouseOver="" className="sort-table" title="Sort alphabetically"
                                     value="first-name"
                            >First Name
                            </Button>
                        </th>
                       
                        <th>
                            <Button  id="sort-by-dept-id"  onClick={() => this.handleSortById(this.state.toggleDeptID, 'departmentID')}
                                     ref="" onMouseOver=""
                                     className="sort-table" title="Sort by id">Department ID</Button>
                        </th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    <TransitionGroup component={null}>
                        {
                            // Map the JSON data and render table
                            this.state.queryBody.map((queryBody, index) =>
                            
                                    <CSSTransition
                                        key={'CSS-' + queryBody.empEmployeeID.toString()}
                                        timeout={800}
                                        classNames='item'
                                    >
                                        <tr key={'row-' + queryBody.empEmployeeID.toString()} className={index}>
                                            <th key={queryBody.empEmployeeID.toString() + '-head'} scope="row">
                                                {queryBody.empEmployeeID}
                                            </th>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-lastname'}>
                                                {queryBody.empLastName}
                                            </td>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-firstname'}>
                                                {queryBody.empFirstName}
                                            </td>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-dept-id'}>
                                                {queryBody.empDepartmentID}
                                            </td>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-id'}>
                                                {this.toDelete(queryBody.empEmployeeID, index)}
                                            </td>
                                        </tr>
                                    </CSSTransition>
                            )}
                    </TransitionGroup>
                    </tbody>
                </Table>
                <Container>
                    
                    <p>
                        <strong>Add new employees to the database.</strong>
                    </p>
                    <Row>
                        <Col>
                            <Form action="" method="get">
                                <FormGroup className="">
                                    <Label for="firstName" className="mr-sm-2 align-left">First Name: </Label><br/>
                                    <Input type="text" name="firstName" id="firstName" placeholder="Trevor"/>
                                </FormGroup>
                                
                                <FormGroup className="">
                                    <Label for="lastName" className="align-left">Last Name:</Label><br/>
                                    <Input type="lastName" name="lastName" id="lastname" placeholder="Garrity"/>
                                </FormGroup>
                                <FormGroup className="">
                                    <Label className="align-left" for="departmentID">Department ID: </Label><br/>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option value="1">Developers</option>
                                        <option value="2">Accounts</option>
                                        <option value="3">Management</option>
                                        <option value="4">Garbage eater</option>
                                    </Input>
                                </FormGroup>
                                <br/>
                                <Button color="primary" type="button">Enter new employee</Button>
                            
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <a target="_blank" rel="noopener noreferrer" title="Check out my code" className="footer-links"
                   href="https://github.com/Trevorjoel">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )}
    
    // Sorts the list by text
    handleSortByTxt = (el) =>{
        // Takes a param from the function to determine which list to sort by
        
        if (el === 'firstName'){
            // Determine the toggle state of the list
            
            switch (this.state.toggleFirstName) {
                case false:
                    this.setState(
                        this.state.queryBody.sort(function (a, b) {
                            
                                const firsNameA = a.empFirstName.toUpperCase();
                                const firstNameB = b.empFirstName.toUpperCase();
                                
                                if (firsNameA < firstNameB) {return -1; }
                                if (firsNameA > firstNameB) {return 1;}
                                // names must be equal
                                return 0;
                            }
                        ));
                    break;
                
                case true:
                    this.setState(
                        this.state.queryBody.sort(function (a, b) {
                                
                                const firsNameA = a.empFirstName.toUpperCase();
                                const firstNameB = b.empFirstName.toUpperCase();
                                
                                if (firstNameB < firsNameA) {return -1; }
                                
                                if (firstNameB > firsNameA) {return 1;}
                                // names must be equal
                                return 0;
                            }
                        ));
                    break;
                    
                default: console.log('Default');
            }
            
            // Change toggle state
            this.toggle(el);
            
        }else if (el === 'lastName'){
            
            switch (this.state.toggleLastName) {
                
                case false:
                    this.setState(
                        this.state.queryBody.sort(function (a, b) {
                                const lastNameA = a.empLastName.toUpperCase();
                                const lastNameB = b.empLastName.toUpperCase();
                                
                                if (lastNameA < lastNameB) {return -1;}
                                if (lastNameA > lastNameB) {return 1;}
                                // names must be equal
                                return 0;
                            }
                        ));
                    break;
                
                case true:
                    this.setState(
                        this.state.queryBody.sort(function (a, b) {
                                
                                const lastNameA = a.empLastName.toUpperCase();
                                const lastNameB = b.empLastName.toUpperCase();
                                
                                if (lastNameB < lastNameA) {return -1;}
                                
                                if (lastNameB > lastNameA) {return 1;}
                                // names must be equal
                                return 0;
                            }
                        ));
                    break;
                    
                default:
                    console.log("default last name");
            }
        }
        this.toggle(el);
    };
    
    // Toggle the correct value
    toggle = function(name) {
        switch (name) {
            case 'firstName': this.setState({toggleFirstName: !this.state.toggleFirstName});
                break;
            case 'lastName': this.setState({toggleLastName: !this.state.toggleLastName});
                break;
            case 'employeeID':  this.setState({toggleEmployeeID: !this.state.toggleEmployeeID});
                break;
            case 'departmentID' : this.setState({toggleDeptID: !this.state.toggleDeptID});
                break;
            default:
                console.log('Unknown argument passed to switch');
            
        }
        
    };
    
    // Sorts the JSON array by numbers, the parameter is the toggle state of the element in the JSON obj
    handleSortById = (tog, s) => {
        // Select the values to sort by
        if(s === 'departmentID') {
            // Check for state of toggle + Do sort
            switch (this.state.toggleDeptID) {
                case false:
                    console.log('B');
                    this.setState(this.state.queryBody.sort(function (a, b) {
                        return b.empDepartmentID - a.empDepartmentID;
                    }));
                    break;
                case true :
                    console.log('C');
                    this.setState(this.state.queryBody.sort(function (a, b) {
                        return a.empDepartmentID - b.empDepartmentID;
                    }));
                    break;
                default:
                    console.log('Default');
            }
            console.log('C2');
            // Reverse toggle value
            this.toggle(s);
        }else if(s ===  'employeeID'){
            switch (tog) {
                case false:console.log('D');
                    this.setState(this.state.queryBody.sort(function (a, b) {
                        return b.empEmployeeID - a.empEmployeeID;
                    }));
                    break;
                
                case true :
                    console.log('E');
                    this.setState(this.state.queryBody.sort(function (a, b) {
                        return a.empEmployeeID - b.empEmployeeID;
                    }));
                    break;
                default:
                    console.log('Default');
            }
            console.log('E2');
            this.toggle(s);
        }

    };
}
export default ProjectTable;
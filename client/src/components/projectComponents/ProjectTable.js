/*
Main file for the employee table project

*/

import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import employeesImg from '../../images/Employees-together1087x250.jpg';
import github from "../../images/github_PNG2.png";
import {Button, Col, Container, FormGroup, Label, Row, Table} from 'reactstrap';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import {AvForm, AvField, AvRadioGroup, AvRadio} from 'availity-reactstrap-validation';

class ProjectTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tempResContainer: [],
            queryBody: [],
            toggleFirstName: false,
            toggleLastName: false,
            toggleEmployeeID: false,
            toggleDeptID:false,
            firstName:'',
            lastName: '',
            departmentID:''
        };
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleDepartmentIDChange = this.handleDepartmentIDChange.bind(this);
    }
    
    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }
    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }
    handleDepartmentIDChange(event) {
        this.setState({departmentID: event.target.value});
    }
    F
    
    handleAddEmployee =  async (event) => {
        // Can't see any difference by prevent default being on/off
        //event.preventDefault();
        
        
        // Check the form fields have been filled and are valid
        if(this.state.firstName !== ''
            && this.state.lastName !== ''
            && this.state.departmentID !== ''
            && isNaN(this.state.firstName)
            && isNaN(this.state.lastName)
            && this.state.firstName.length > 1
            && this.state.lastName.length > 1 ////
            && this.state.lastName.match(/^[a-zA-Z()]+$/)
            && this.state.firstName.match(/^[a-zA-Z()]+$/)
        ){
            // Go ahead and process request
            const response =  await fetch('/api/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    departmentID: this.state.departmentID
                })});
            
            const body = await response.json()
            
            // Set state
                .then(response =>
                    this.setState({
                        queryBody: response.database3,
                        firstName: '',
                        lastName: '',
                        departmentID: ''
                    })
                );
            // todo: Return a success message to user
            //  this.success();
            // Reset the form fields
            this.form && this.form.reset();
        } // else Do nothing and let the html form validation work
        
    };
    //
    // Request api
    queryDB = async () => {
        const response = await fetch('/api/sql');
        const query = await response.json();
        if (response.status !== 200) throw Error(query.message);
        
        return query;
    };
    
    populateTable = function (){
        // Check if the DB is empty
        if (this.state.queryBody.length === 0 ){
            // Show the button to populate table if clicked then query db
            return <Button onClick={async () => {
                const results = await fetch('/api/sql', {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                        })
                });
                const body = await results.json()
                    .then(results =>
                        this.setState({queryBody: results.database2}) // keep an eye on the values
                    )
            }
            } color="success" block>Populate the table</Button>
        }
    };
    // Create and render delete buttons for the database rows
    toDelete = function (empID) {
        
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
                    })});
            
            const body = await results.json()
            // Set state
                .then(res =>
                    this.setState({queryBody: res.database2}))}
            
        }
                       title="Remove" color="danger">Remove</Button>;
        
    };
    
    render() {
        return (
            <div className="project-inner-wrapper centre-font">
                <Image className="project-modal-img img-rounded" src={employeesImg} fluid/>
                
                <h3>Some CRUD fun!</h3><br/>
                <p className="card-text modal-text">
                    Create, read, update, delete and sort the employees in a database.
                </p>
                <strong>List of company employees.</strong>
                
                <Table className="employee-table" striped bordered dark hover responsive>
                    <thead>
                    <tr>
                        <th>
                            <Button id={"uniqueID"}
                                    onClick={() =>
                                        this.handleIntegerSort('employeeID')}
                                    value="employeeID"
                                    className="sort-table"
                                    title="Reverse the id's"> ID
                            </Button>
                        </th>
                        <th>
                            <Button id="sort-by-last-name"
                                    onClick={() => this.handleTextSort('lastName')}
                                    ref=""  onMouseOver=""
                                    className="sort-table"
                                    title="Sort alphabetically">Last Name
                            </Button>
                        </th>
                        <th>
                            <Button  id="sort-by-first-name"
                                     onClick={() => this.handleTextSort('firstName')}
                                     ref="" onMouseOver="" className="sort-table" title="Sort alphabetically"
                                     value="first-name"
                            >First Name
                            </Button>
                        </th>
                        
                        <th>
                            <Button  id="sort-by-dept-id"  onClick={() => this.handleIntegerSort('departmentID')}
                                     ref="" onMouseOver=""
                                     className="sort-table" title="Sort by id">Department ID</Button>
                        </th>
                        <th>{this.populateTable()}</th>
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
                                            {this.toDelete(queryBody.empEmployeeID, this.responseSort)}
                                        </td>
                                    </tr>
                                
                                </CSSTransition>
                            )}
                    </TransitionGroup>
                    </tbody>
                    {console.log(this.state.queryBody)}
                
                </Table>
                <Container>
                    <p>
                        <strong>Add new employees to the database.</strong>
                    </p>
                    <Row className="add-employee-form">
                        <Col>
                            <AvForm onSubmit={this.handleAddEmployee}  ref={c => (this.form = c)}>
                                <FormGroup className="">
                                    <Label for="firstName" className="mr-sm-2 align-left">First Name: </Label><br/>
                                    <AvField value={this.state.firstName}
                                             type="text"
                                             name="firstName"
                                             id="firstName"
                                             placeholder="Trevor"
                                             onChange={this.handleFirstNameChange}
                                             errorMessage="Invalid first name" validate={{
                                        required: {value: true, errorMessage: 'Please enter a first name'},
                                        pattern: {value: '/^[a-zA-Z()]+$/', errorMessage: 'Your name must be composed only with letters '},
                                        minLength: {value: 2, errorMessage: 'Your name must be between 2 and 15 characters'},
                                        maxLength: {value: 15, errorMessage: 'Your name must be between 2 and 15 characters'}}}
                                    />
                                </FormGroup>
                                
                                <FormGroup className="">
                                    <Label  for="lastName" className="align-left">Last Name:</Label><br/>
                                    <AvField  value={this.state.lastName}
                                              type="lastName"
                                              name="lastName"
                                              id="lastName"
                                              placeholder="Garrity"
                                              onChange={this.handleLastNameChange}
                                              validate={{
                                                  required: {value: true, errorMessage: 'Please enter last name'},
                                                  pattern: {value: '/^[a-zA-Z()]+$/', errorMessage: 'Your name must be composed only with letters '},
                                                  minLength: {value: 2, errorMessage: 'Your name must be between 2 and 15 characters'},
                                                  maxLength: {value: 15, errorMessage: 'Your name must be between 2 and 15 characters'}
                                              }}
                                    
                                    />
                                </FormGroup>
                                <FormGroup className="">
                                    <Label className="align-left" for="departmentID">Department ID: </Label><br/>
                                    <AvRadioGroup inline  //required
                                                  errorMessage="Pick a department." value={this.state.departmentID} type="select" name="select" id="departmentID" validate={{max: {value: 4}}}  >
                                        <AvRadio label="Developer" value="1" onChange={this.handleDepartmentIDChange} />
                                        <AvRadio label="Accounts" value="2" onChange={this.handleDepartmentIDChange} />
                                        <AvRadio label="Management" value="3" onChange={this.handleDepartmentIDChange} />
                                        <AvRadio label="Garbage eater" value="4" onChange={this.handleDepartmentIDChange} />
                                    </AvRadioGroup>
                                
                                </FormGroup>
                                <br/>
                                <Button color="primary" value="submit" type="submit">Enter new employee</Button>
                            
                            </AvForm>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <a target="_blank" rel="noopener noreferrer" title="See the code" className="footer-links"
                   href="https://github.com/Trevorjoel/portfolio/blob/master/client/src/components/projectComponents/ProjectTable.js">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )}
    
    // Sorts the list by text
    handleTextSort = (el) =>{
        // Takes an argument from the function call to determine which list to sort by
        
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
    
    // Toggle the correct value switch off unused toggle values , keeps track of the sort state
    toggle = function(name) {
        switch (name) {
            case 'firstName': this.setState({
                toggleFirstName: !this.state.toggleFirstName,
                toggleLastName: false,
                toggleDeptID:false,
                toggleEmployeeID: false});
                break;
            case 'lastName': this.setState({
                toggleLastName: !this.state.toggleLastName,
                toggleFirstName: false,
                toggleDeptID:false,
                toggleEmployeeID: false});
                break;
            case 'employeeID':  this.setState({
                toggleEmployeeID: !this.state.toggleEmployeeID,
                toggleLastName: false,
                toggleDeptID:false,
                toggleFirstName: false});
                break;
            case 'departmentID' : this.setState({
                toggleDeptID: !this.state.toggleDeptID,
                toggleLastName: false,
                toggleFirstName:false,
                toggleEmployeeID: false});
                break;
            default:
                console.log('Unknown argument passed to switch');
            
        }
        
    };
    
    // Sorts the JSON array by numbers, the parameter is the toggle state of the element in the JSON obj
    handleIntegerSort = (s) => {
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
            switch (this.state.toggleEmployeeID) {
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
    // Set the queryBody state upon mounting
    componentDidMount() {
        this.queryDB()
            .then(res => this.setState({
                queryBody: res.database1,
                tempResContainer: res.database1
            }))
            .catch(err => console.log(err));
    }
    responseSort(st,th){
        console.log('Response sort Fn Run');
        console.log(st.toggleEmployeeID);
        console.log(st);
        let s;
        switch (st) {
            case (!st.toggleLastName === true):
                s = 'lastName';
                this.handleTextSort(s);
                break;
            case (st.toggleFirstName === true):
                s = 'firstName';
                this.handleTextSort(s);
                break;
            case (st.toggleEmployeeID === true):
                s = 'employeeID';
                break;
            case  (st.toggleDeptID === true):
                s = 'departmentID';
                this.handleIntegerSort(s);
                break;
            
            default: console.log('not found');
        }
        th.setState({tempResContainer: st.queryBody})
    };
    
}
export default ProjectTable;
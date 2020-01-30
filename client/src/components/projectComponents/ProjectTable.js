/*
Main file for the employee table project
*/

import React, {Component} from 'react';
import github from "../../images/hiclipart.com.png";
import {Button, Col, Container, Fade, FormGroup, Label, Row, Table} from 'reactstrap';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import {AvField, AvForm, AvRadio, AvRadioGroup} from 'availity-reactstrap-validation';
import ProjectsHeader from "./ProjectsHeader";

import {queryDB,
    handleAddEmployee,
    populateTable,
    handleDelete,
    handleTextSort,
    toggleStateTracker,
    handleIntegerSort,
    responseSort,
    handleFirstNameChange,
    handleLastNameChange,
    handleDepartmentIDChange} from "../../functions/tableController";

import {ScreenAlertComponent} from "../../functions/MainController";
class ProjectTable extends Component {
    
    // Sorts the list by alphanumeric
    empFirstName;
    empLastName;
    // Sorts the JSON array by numbers, the parameter is the toggle state of the element in the JSON obj
    empDepartmentID;
    empEmployeeID;
    
    constructor(props) {
        super(props);
        this.state = {
            tempResContainer: [],
            queryBody: [],
            toggleFirstName: false,
            toggleLastName: false,
            toggleEmployeeID: false,
            toggleDeptID: false,
            firstName: '',
            lastName: '',
            departmentID: '',
            rotateMessage: true
        };
        
        // Bind all of the imported functions to this
        this.queryDB = queryDB.bind(this);
        this.responseSort = responseSort.bind(this);
        this.handleIntegerSort = handleIntegerSort.bind(this);
        this.toggleStateTracker = toggleStateTracker.bind(this);
        this.handleTextSort = handleTextSort.bind(this);
        this.ScreenAlertComponent = ScreenAlertComponent.bind(this);
        this.handleAddEmployee = handleAddEmployee.bind(this);
        this.populateTable = populateTable.bind(this);
        this.handleDelete= handleDelete.bind(this);
       this.handleFirstNameChange = handleFirstNameChange.bind(this);
        this.handleLastNameChange = handleLastNameChange.bind(this);
        this.handleDepartmentIDChange = handleDepartmentIDChange.bind(this);
    }
    
    componentDidMount() {
        this.queryDB()
            .then(res => this.setState({
                queryBody: res.database1,
                tempResContainer: res.database1
            }))
            .catch(err => console.log(err));
    }
    
    
    render() {
        let titleStyle = {
            margin: "0% 0px 100px",
            textAlign: 'center'
        };
        
        let headerStyle = {
            margin: '40px 0 200px 0',
            paddingLeft: '10%',
            paddingRight: '10%',
            color: 'white',
            width: '100%'
        };
        const projectName = 'Create Read Delete and Sort.';
        const projectPurpose = ["Implement a front end interface and back end logic to create, read, update and delete entries in a database. ",
            "Practice, Node, React, SQL, RESTful API's, JavaScript" +
            " and have a little fun."];
        
        const projectDescription = ["After taking various tutorials on interesting technologies I needed to put the knowledge to work.",
            "Use the buttons in the table head to sort the table. Delete entries with the red buttons or add new ones with the form."];
        const projectLearning = ['Mostly a practice exercise, so I would recommend better planning and implementation.', 'Breaking the components and methods up into more reusable modules would be a must for a larger project.', 'I need someone to check over my ' +
        'back end practices to improve them.'];
        const link1 = [''];
        const link2 = ['', ''];
        const link3 = [''];
        const link4 = [''];
        const whatNext = ["This type of project would need to be protected by user verification/login. "];
        
        return (
            <div className="project-inner-wrapper centre-font">
                {this.ScreenAlertComponent()}
                <ProjectsHeader
                    projectName={projectName}
                    projectPurpose={projectPurpose}
                    projectDescription={projectDescription}
                    projectLearning={projectLearning}
                    whatNext={whatNext}
                    link1={link1} link2={link2} link3={link3} link4={link4}
                    headerStyle={headerStyle}
                    titleStyle={titleStyle}
                />
                
                <Fade>
                    <h4 className="form-paragraph">Employees.</h4>
                    
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
                                <Button id="sort-by-first-name"
                                        onClick={() => this.handleTextSort('firstName')}
                                        ref="" onMouseOver="" className="sort-table" title="Sort alphabetically"
                                        value="first-name"
                                >First Name
                                </Button>
                            </th>
                            <th>
                                
                                <Button id="sort-by-last-name"
                                        onClick={() => this.handleTextSort('lastName')}
                                        ref="" onMouseOver=""
                                        className="sort-table"
                                        title="Sort alphabetically">Last Name
                                </Button>
                            </th>
                            
                            <th>
                                <Button id="sort-by-dept-id" onClick={() => this.handleIntegerSort('departmentID')}
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
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-firstname'}>
                                                {queryBody.empFirstName}
                                            </td>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-lastname'}>
                                                {queryBody.empLastName}
                                            </td>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-dept-id'}>
                                                {queryBody.empDepartmentID}
                                            </td>
                                            <td key={queryBody.empEmployeeID.toString() + '-emp-id'}>
                                                {this.handleDelete(queryBody.empEmployeeID, this.responseSort)}
                                            </td>
                                        
                                        </tr>
                                    
                                    </CSSTransition>
                                )}
                        </TransitionGroup>
                        
                        </tbody>
                    
                    
                    </Table>
                </Fade>
                <Container>
                    
                    <Row className="add-employee-form">
                        <p className="form-paragraph">
                            <h4>Add employees to the database.</h4>
                        </p>
                        <Col sm={12} md={12} lg={12}>
                            <AvForm onSubmit={()=> this.handleAddEmployee() } ref={c => (this.form = c)}>
                                <FormGroup className="">
                                    <Label for="firstName" className="mr-sm-2 align-left">First Name: </Label><br/>
                                    <AvField value={this.state.firstName}
                                             type="text"
                                             name="firstName"
                                             id="firstName"
                                             placeholder="First name"
                                             onChange={this.handleFirstNameChange}
                                             errorMessage="Invalid first name" validate={{
                                        required: {value: true, errorMessage: 'Please enter a first name'},
                                        pattern: {
                                            value: '/^[a-zA-Z()]+$/',
                                            errorMessage: 'Your name must be composed only with letters '
                                        },
                                        minLength: {
                                            value: 2,
                                            errorMessage: 'Your name must be between 2 and 15 characters'
                                        },
                                        maxLength: {
                                            value: 15,
                                            errorMessage: 'Your name must be between 2 and 15 characters'
                                        }
                                    }}
                                    />
                                </FormGroup>
                                
                                <FormGroup className="">
                                    <Label for="lastName" className="align-left">Last Name:</Label><br/>
                                    <AvField value={this.state.lastName}
                                             type="lastName"
                                             name="lastName"
                                             id="lastName"
                                             placeholder="Last name"
                                             onChange={this.handleLastNameChange}
                                             validate={{
                                                 required: {value: true, errorMessage: 'Please enter last name'},
                                                 pattern: {
                                                     value: '/^[a-zA-Z()]+$/',
                                                     errorMessage: 'Your name must be composed only with letters '
                                                 },
                                                 minLength: {
                                                     value: 2,
                                                     errorMessage: 'Your name must be between 2 and 15 characters'
                                                 },
                                                 maxLength: {
                                                     value: 15,
                                                     errorMessage: 'Your name must be between 2 and 15 characters'
                                                 }
                                             }}
                                    
                                    />
                                </FormGroup>
                                <FormGroup className="">
                                    <Label className="align-left" for="departmentID">Department: </Label><br/>
                                    <AvRadioGroup inline required
                                                  errorMessage="Pick a department."
                                                  value={this.state.departmentID}
                                                  type="select" name="select" id="departmentID"
                                                  validate={{max: {value: 4}}}>
                                        <div className="radio-group">
                                            <AvRadio label="Developer" value="1"
                                                     onChange={this.handleDepartmentIDChange}/>
                                            <AvRadio label="Accounts" value="2"
                                                     onChange={this.handleDepartmentIDChange}/>
                                            <AvRadio label="Management" value="3"
                                                     onChange={this.handleDepartmentIDChange}/>
                                            <AvRadio label="Garbage eater" value="4"
                                                     onChange={this.handleDepartmentIDChange}/>
                                        </div>
                                    </AvRadioGroup>
                                
                                </FormGroup>
                                <br/>
                                <Button color="primary" value="submit" type="submit">Enter new employee</Button>
                            
                            </AvForm>
                        </Col>
                    
                    </Row>
                    <div className="project-icons">
                        <a target="_blank"
                           rel="noopener noreferrer"
                           title="See the code"
                           className="footer-links"
                           href="https://github.com/Trevorjoel/portfolio/blob/master/client/src/components/projectComponents/ProjectTable.js">
                            <img alt="Github icon"
                                 className="App-logo footer-icons"
                                 src={github}/>
                        </a>
                        <p>Code for this project.</p>
                    </div>
                </Container>
                
                <hr/>
            
            </div>
        )
    }
    
}

export default ProjectTable;
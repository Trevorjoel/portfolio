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
            toggleID: false
        };
    }
    
    componentDidMount() {
        
        this.queryDB()
            .then(res => this.setState({queryBody: res.database1}))
            .catch(err => console.log(err));
    }
    
    queryDB = async () => {
        
        const response = await fetch('/api/sql');
        const query = await response.json();
        if (response.status !== 200) throw Error(query.message);
        
        return query;
    };
    
    noDelete = function (empID) {
        if (empID <= 3) {
            return (
                <div title="Can't sack them all!">X</div>
            );
        } else {
            // todo: finish delete by ID
            return (
                <Button name={empID} onClick={async () => {
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
                        
                        .then(res => this.setState({queryBody: res.database2})) // Why doesn't it like <setState> ?
                }
                } title="Remove" color="danger">Remove</Button>
            );
        }
        
    };
    handleSortByUniqueId = (e) => {
        if (this.state.toggleID === false) {
            this.setState({toggleID : true});
            this.setState(this.state.queryBody.sort(function (a, b) {
                return b.empEmployeeID - a.empEmployeeID;
            }));
        }else{
            this.setState({toggleID : false});
            this.setState(this.state.queryBody.sort(function (a, b) {
                return a.empEmployeeID - b.empEmployeeID;
            }));
        }
        /*this.setState(this.state.queryBody.reverse());
        console.log(this.state.queryBody)*/
    };
   
    handleSortByFirstName = () => {
   const originalState = this.state.queryBody;
   console.log(originalState);
    if (this.state.toggleFirstName === false){
        console.log(`Setting state 1`);
        this.setState({toggleFirstName : true});
        this.setState(
            this.state.queryBody.sort(function (a, b) {
                const firsNameA = a.empFirstName.toUpperCase();
                const firstNameB = b.empFirstName.toUpperCase();
                console.log();
                if (firsNameA < firstNameB) {
                    
                    return -1;
                }
                if (firsNameA > firstNameB) {
                   
                    return 1;
                }
                // names must be equal
                return 0;
            }
        ));
        
    }else{
        console.log('setting state 2');
        
        this.setState({toggleFirstName : false});
        this.setState(
            this.state.queryBody.sort(function (a, b) {
                    const firsNameA = a.empFirstName.toUpperCase();
                    const firstNameB = b.empFirstName.toUpperCase();
                    console.log();
                    if (firstNameB < firsNameA) {
                    
                        return -1;
                    }
                    if (firstNameB > firsNameA) {
                    
                        return 1;
                    }
                    // names must be equal
                    return 0;
                }
            ));
    }
    
    };
    
    handleSortByLastName = (e) => {
    
    };
    handleSortByDepartmentId = (e) => {
        
        console.log('Sort by id');
    };
    
    render() {
        return (
            <div className="project-inner-wrapper">
                <Image className="project-modal-img img-rounded" src={employeesImg} fluid/>
                
                <h3>You have some CRUD employees!</h3><br/>
                <p className="card-text">Here's a little example of the basic CRUD operations.
                    <br/>Create Read update, delete and sort employees in a database.</p>
                
                
                <strong>List of company employees.</strong>
                
                <Table className="employee-table" striped bordered dark hover responsive>
                    <thead>
                    <tr>
                        <th>
                            <a id="sort-by-id" onClick={this.handleSortByUniqueId} ref="" onMouseOver="" className="sort-table" title="Reverse the id's"> ID</a>
                        </th>
                        <th>
                            <a id="sort-by-last-name" onClick={this.handleSortByLastName} ref=""  onMouseOver="" className="sort-table" title="Sort alphabetically">Last Name</a>
                        </th>
                        <th>
                            <a id="sort-by-first-name" onClick={this.handleSortByFirstName} ref="" onMouseOver="" className="sort-table" title="Sort alphabetically">First Name</a>
                        </th>
                       
                        <th>
                            <a id="sort-by-dept-id"  onClick={this.handleSortByDepartmentId} ref="" onMouseOver="" className="sort-table" title="Sort by id">Department ID</a>
                        </th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    <TransitionGroup component={null}>
                        {
                            this.state.queryBody.map((queryBody =>
                                    
                                    <CSSTransition
                                        key={'CSS-' + queryBody.empEmployeeID.toString()}
                                        timeout={800}
                                        classNames='item'
                                    >
                                        <tr key={'row-' + queryBody.empEmployeeID.toString()} className="">
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
                                                {this.noDelete(queryBody.empEmployeeID)}
                                            </td>
                                        </tr>
                                    </CSSTransition>
                            ))
                        }
                    
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
        )
    }
}

export default ProjectTable;
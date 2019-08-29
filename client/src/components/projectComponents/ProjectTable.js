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
            queryBody: []
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
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department ID</th>
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
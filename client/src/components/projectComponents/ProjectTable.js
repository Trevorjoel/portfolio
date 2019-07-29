import { Component } from 'react';
import React from 'react';
import Image from 'react-bootstrap/Image'
import employeesImg from '../../images/Employees-together1087x250.jpg';
import github from "../../images/github_PNG2.png";
import { Container, Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';


class ProjectTable extends Component{
    state = {
        queryBody:[]
    };
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
        if(empID <= 3){
            return(
                <div >Cannot delete</div>
            );
    }else {
            return(
                <Button color="danger">Delete</Button>
            );
        }

};
    render(){
        return(
            <div className="project-inner-wrapper">
                <Image className="project-modal-img" src={employeesImg} fluid />
                <p>
                    <strong>List of company employees.</strong>
                </p>
                <Table className="employee-table" dark>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department ID</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                     {this.state.queryBody.map(queryBody =>
                         <tr>
                             <th scope="row">{queryBody.empEmployeeID}</th>
                             <td>{queryBody.empLastName}</td><td>{queryBody.empFirstName}</td><td>{queryBody.empDepartmentID}
                     </td><td>{this.noDelete(queryBody.empEmployeeID)}</td></tr>
                    )}
                    
                    </tbody>
                </Table>
                <Container>
                
                <p>
                   
                    <strong>Add employees to the database.</strong>
                </p>
                    <Row>
                        <Col> </Col>
                        <Col>
                <Form  action="" method="get">
                    
                   
                    <FormGroup className="">
                        <Label for="firstName" className="mr-sm-2">First Name: </Label><br/>
                        <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                    </FormGroup>
                    
                    <FormGroup className="">
                        <Label for="lastName" className="">Last Name:</Label><br/>
                        <Input type="lastName" name="lastName" id="lastname" placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup className="">
                        <Label for="departmentID">Department ID: </Label><br/>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </FormGroup>
                    <br/>
                    <Button color="primary" type="button">Enter new employee</Button>
                    
                </Form>
                    </Col><Col> </Col>
                    </Row>
                </Container>
                <a target="_blank" title="Check out my code" className="footer-links" href="https://github.com/Trevorjoel">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )
    }
}
export default ProjectTable;
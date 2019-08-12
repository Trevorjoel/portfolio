import { Component } from 'react';
import React from 'react';
import Image from 'react-bootstrap/Image'
import employeesImg from '../../images/Employees-together1087x250.jpg';
import github from "../../images/github_PNG2.png";
import { Container, Col, Button, Form, FormGroup, Label, Input, Row, Table } from 'reactstrap';


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
                <div title="Can't sack them all!">Cannot fire!</div>
            );
    }else {
            return(
                <Button title="You know you want to!" color="danger">Sack them!</Button>
            );
        }

};
    render(){
        return(
            <div className="project-inner-wrapper">
                <Image className="project-modal-img img-rounded" src={employeesImg} fluid />
                
                
                <p>Here's a little example of some of my abilities. <br/>I threw together this little app
                    to show I have the basics down of CRUD operations. <br/>Create Read update and delete presented in a nice little table.</p>
             
                
                    <strong>List of company employees.</strong>
                
                <Table className="employee-table" dark>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department ID</th>
                        <th>Fire them</th>
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
                   
                    <strong>Hire new employees to the database.</strong>
                </p>
                    <Row>
                        <Col> </Col>
                        <Col>
                <Form  action="" method="get">
                    
                   
                    <FormGroup className="">
                        <Label for="firstName" className="mr-sm-2">First Name: </Label><br/>
                        <Input type="text" name="firstName" id="firstName" placeholder="Trevor. . . (Hint hint)" />
                    </FormGroup>
                    
                    <FormGroup className="">
                        <Label for="lastName" className="">Last Name:</Label><br/>
                        <Input type="lastName" name="lastName" id="lastname" placeholder="Garrity" />
                    </FormGroup>
                    <FormGroup className="">
                        <Label for="departmentID">Department ID: </Label><br/>
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
                    </Col><Col> </Col>
                    </Row>
                </Container>
                <hr/>
                <a target="_blank" title="Check out my code" className="footer-links" href="https://github.com/Trevorjoel">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )
    }
}
export default ProjectTable;
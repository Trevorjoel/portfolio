import { Component } from 'react';
import React from 'react';
import { Table } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import cardplaceholder from '../../images/cardplaceholder.svg';
import github from "../../images/github_PNG2.png";



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
    
    render(){
        return(
            <div className="project-inner-wrapper">
                <Image className="project-modal-img" src={cardplaceholder} fluid />
                <p>
                    Make changes to the database.
                </p>
                <Table dark>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department ID</th>
                    </tr>
                    </thead>
                    <tbody>
                     {this.state.queryBody.map(queryBody => <tr><th scope="row">{queryBody.empEmployeeID}</th><td>{
                         queryBody.empFirstName}</td>{queryBody.empLastName}<td>{queryBody.empDepartmentID}
                     </td></tr>
                    
                    )}
                    
                    </tbody>
                </Table>
                <a target="_blank" title="Check out my code" className="footer-links" href="https://github.com/Trevorjoel">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )
    }
}
export default ProjectTable;
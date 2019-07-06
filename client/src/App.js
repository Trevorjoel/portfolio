import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss';

class App extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
        queryBody: [],
    };
    
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err));
        this.queryDB()
            .then(res => this.setState({queryBody: res.database1}))
    }
    queryDB = async () => {
        
        const response = await fetch('/api/sql');
        const query = await response.json();
        if (response.status !== 200) throw Error(query.message);
        
        return query;
    };
    
    
    callApi = async () => {
        
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };
    
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: this.state.post}),
            
        });
       
        const body = await response.text();
        this.setState({responseToPost: body});
        console.log(body);
    };
    
    render() {
        return (
            
            <div className="App">
                <NavBar />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                22222
                    </p>
                </header>
                <div>
                
                </div>
                
                <p>{this.state.response}</p>
                
                <div className="table">
                    <h4>Database connected: </h4>
                    <ul>
                        {this.state.queryBody.map(queryBody => <li>Name:
                            {queryBody.empFirstName}, {queryBody.empLastName}</li>)}
                    </ul>
                </div>
                
                <form onSubmit={this.handleSubmit}>
                    
                   
                    <p>
                        <strong>Test post:</strong>
                    </p>
                    <input
                        type="text"
                        value={this.state.post}
                        onChange={e => this.setState({post: e.target.value})}
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p>
            </div>
        );
    }
}
    export default App;

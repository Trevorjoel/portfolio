import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss';
import { BrowserRouter, Route} from "react-router-dom";
import Sensors from './components/reactRoutes/Sensors';
import Home from "./components/reactRoutes/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
// todo: Create 404 page
class App extends Component {
    render() {
        return (
            <div className="App">
                
                <BrowserRouter>
                    <NavBar />
                    <Route path="/" component={Home} exact />
                    <Route path="/sensors" component={Sensors} />
                </BrowserRouter>
                <Footer/>
                
            </div>
        );
    }
}
    export default App;

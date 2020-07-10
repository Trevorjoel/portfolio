import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss';
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import Sensors from './components/reactRoutes/Sensors';
import Home from "./components/reactRoutes/Home";
import NavBar from "./components/frontPageLayout/Navbar";
import Footer from "./components/frontPageLayout/Footer";
import Page404 from "./components/projectComponents/404";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// todo: Jazz up the 404 page
class App extends Component {
    

    render() {
        return (
            <div className="App">

                <BrowserRouter>


                    <Switch>
                        <Route path="/sensors" component={Sensors}  />
                        <Route path="/" component={Home}  exact />

                        <Route component={Page404}  />

                    </Switch>
                </BrowserRouter>
             
                <Footer/>
            
            </div>
        );
    }
}

export default App;

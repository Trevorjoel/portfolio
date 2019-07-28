import React, { Component } from 'react';

import NavBar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import TestArea from './components/TestArea';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Introduction from './components/Introduction';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/custom.scss';


class App extends Component {
   
    
    render() {
        return (
            
            <div className="App">
                <NavBar />
              
                <Header />
                <Introduction />
                <Projects />
            <ContactForm/>
          <TestArea/>
                
                <Footer/>
            </div>
        );
    }
}
    export default App;

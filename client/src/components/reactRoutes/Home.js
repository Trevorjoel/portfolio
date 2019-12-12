
import Header from "../Header";
import Introduction from "../Introduction";
import Projects from "../Projects";
import ContactForm from "../ContactForm";

import React, {Component} from "react";

class Home extends Component {
    
    render() {
        return (
            
            <div>
               
            
                <Header />
                <Introduction />
                <Projects />
                <ContactForm/>
                {/*<TestArea/>
                */}
          
            
            </div>
        );
    }
}
export default Home;
import { Component } from 'react';
import React from 'react';

import Image from 'react-bootstrap/Image'
import cardplaceholder from '../../images/cardplaceholder.svg';
import github from "../../images/github_PNG2.png";



class ProjectTemplate extends Component{

    
    render(){
        return(
            <div>
                <Image className="project-modal-img" src={cardplaceholder} fluid />
             <p>
                 This is the template to start individual project components.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
             </p>
                <a target="_blank" title="Check out my code" className="footer-links" href="https://github.com/Trevorjoel">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )
    }
}
export default ProjectTemplate;
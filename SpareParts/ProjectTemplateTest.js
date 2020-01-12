import React, {Component} from 'react';

import Image from 'react-bootstrap/Image'
import cardplaceholder from '../client/src/images/cardplaceholder.svg';
import github from "../client/src/images/github_PNG2.png";


class ProjectTemplateTest extends Component {
    
    
    render() {
        return (
            <div>
                
                <Image className="project-modal-img" src={cardplaceholder} fluid/>
                <h1>TEST</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse
                </p>
                <a target="_blank" rel="noopener noreferrer" title="Check out my code" className="footer-links"
                   href="https://github.com/Trevorjoel">
                    <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
            </div>
        )
    }
}

export default ProjectTemplateTest;
import Header from "../frontPageLayout/Header";
import ContactForm from "../frontPageLayout/ContactForm";
import Gallery from "../projectCards/ProjectsCarousel";
import React, {Component} from "react";
import SkillsTabs from "../SkillsTabs";

class Home extends Component {

  componentDidMount() {
  
  }
    
    
    // Request api
    queryDB = async () => {
        const response = await fetch('/api/sql');
        const query = await response.json();
        if (response.status !== 200) throw Error(query.message);
        
    };
    
    
    render() {
        return (
            <div>
                <Header/>
                <SkillsTabs/>
                <Gallery />
                <ContactForm/>
                {/*<TestArea/>*/}
            </div>
           
        );
    }
}

export default Home;
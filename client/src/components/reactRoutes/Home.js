import Header from "../Header";
import ContactForm from "../ContactForm";
import Gallery from "../Carousel";
import React, {Component} from "react";
import SkillsTabs from "../SkillsTabs";

class Home extends Component {

  componentDidMount() {
     // window.scrollTo( 0 ,0)
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
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import ProjectEmployees from "./ProjectEmployees";
import ProjectSliders from "./ProjectSliders";
import ProjectBlog from "../projectComponents/blog/ProjectBlog";


class Gallery extends React.Component {
    
    state = {
        galleryItems: [
            <ProjectEmployees />,
            <ProjectSliders/>,
            <ProjectBlog/>
        
        ].map((i) => <div key={i}>{i}</div>),
    };
    
    responsive = {
        
        0: {items: 2},
        900: {items: 2},
        1200: {items: 4}
    };
    
    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item);
        console.debug('Slide`s position during a change: ', e.slide)
    }
    
    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item);
        console.debug('Slide`s position after changes: ', e.slide)
    }
    
    render() {
        return (
           
            <div id="projects" className="carousel-container" >
                 <h1 id="trigger-top" className="projects-title">LATEST PROJECTS</h1>
               
                <div className="projects-container container">

                    <AliceCarousel
                        
                        items={this.state.galleryItems}
                        responsive={this.responsive}
                        autoPlayInterval={5000}
                        autoPlayDirection="ltr"
                        autoPlay={true}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        playButtonEnabled={false}
                        disableAutoPlayOnAction={false}
                        onSlideChange={this.onSlideChange}
                        onSlideChanged={this.onSlideChanged}
                        buttonsDisabled={false}

                    />

                </div>
            </div>
            
        )
    }
}

export default Gallery;
import React, {useState} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Media} from 'reactstrap';

// CERT IMAGES
const pyCert = require('../images/technologies/py_cert.resized.jpg');
const WPCert = require('../images/technologies/wordpress-cusomisation-cert.jpg');
const WPPlugCert = require('../images/technologies/WP_plugins_cert.jpg');
const WebDesCert = require('../images/technologies/web_design_cert.resized.jpg');


const items = [
    {
        src: pyCert,
        altText: '',
        caption: ''
    },
    {
        src: WPCert,
        altText: '',
        caption: ''
    },
    {
        src: WPPlugCert,
        altText: '',
        caption: ''
    },
    {
        src: WebDesCert,
        altText: '',
        caption: ''
    },
];
const CertificationsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    
    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Media className="img-fluid" src={item.src} alt={item.altText}/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
            </CarouselItem>
        );
    });
    
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
            {slides}
            <CarouselControl className="carousel-next" direction="prev" directionText="Previous"
                             onClickHandler={previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
    );
};

export default CertificationsCarousel;
import React from "react";
import image from '../../images/404.png';

const Page404 = () => {
    
    return <div className="page">
        <img className="img404" alt="You have come to the wrong place." src={image}/>
        <div>Unlucky mate!</div>
    </div>;
};
export default Page404;
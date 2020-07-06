import React, {Component} from "react";
import classes from "./AdviceContainer.module.scss";
import Chevron from "./Chevron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './style.css'

import TroutInfo from "./TroutInfo";
import Placeholder from "./Placeholder";
import Introduction from "./TextComponents/IntroductionTxt";
import AmmoniaBasics from "./TextComponents/AmmoniaBasics";
import AmmoniaHigh from "./TextComponents/AmmoniaHigh";
import AmmoniaLow from "./TextComponents/AmmoniaLow";
import ComingSoon from "../Loading/ComingSoon";
import PhBasics from "./TextComponents/PhBasics";
import BarramundiInfo from "./TextComponents/BarramundiInfo";
import SilverPerchInfoInfo from "./TextComponents/SilverPerchInfo";

class AdviceWiki extends Component {


    render() {

        return (
            <div>
            <main>
                <nav className="section-nav">
                    <ol>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#ammonia">Ammonia</a>
                            <ul>
                                <li className=""><a href="#ammonia--basics">Basics</a></li>
                                <li className=""><a href="#ammonia--high">High</a></li>
                                <li className=""><a href="#ammonia--low">Low</a></li>

                            </ul>
                        </li>
                        <li><a href="#cycling">Cycling</a></li>
                        <li><a href="#fish">Fish</a>
                            <ul>
                                <li className=""><a href="#fish--barramundi">Barramundi</a></li>
                                <li className=""><a href="#fish--silver-perch">Silver Perch</a></li>
                                <li className=""><a href="#fish--trout">Trout</a></li>
                            </ul>
                        </li>
                        <li><a href="#ph">pH</a>
                            <ul>
                                <li className=""><a href="#ph--basics">Basics</a></li>
                                <li className=""><a href="#ph--high">High</a></li>
                                <li className=""><a href="#ph--low">Low</a></li>

                            </ul>

                        </li>
                        <li><a href="#temperature">Temperature</a>
                            <ul>
                                <li className=""><a href="#temperature--basics">Basics</a></li>
                                <li className=""><a href="#temperature--high">High</a></li>
                                <li className=""><a href="#temperature--low">Low</a></li>

                            </ul>

                        </li>
                        <hr/>
                        <li><a href="#credits">Developers</a>
                            <ul>
                                <li className=""><a href="#credits--trevor">Trevor Garrity</a></li>
                                <li className=""><a href="#credits--dimitry">Dimitry Radyukin</a></li>
                                <li className=""><a href="#credits--anna">Anna Osyatinskaya</a></li>
                            </ul>
                        </li>
                        <li className=""><a href="#resources">Resources</a></li>
                        <li className=""><a href="#products">Products</a></li>

                    </ol>
                </nav>
                <div>

                    <section id="introduction">
                        <h2>Introduction</h2>
                        <Introduction/>
                    </section>
                    <section id="ammonia">
                        <h2>Ammonia</h2>
                        <hr/>
                        <section id="ammonia--basics">
                         <AmmoniaBasics/>
                        </section>
                        <section id="ammonia--high">
                            <h3>High</h3>
                            <AmmoniaHigh/>
                        </section>
                        <section id="ammonia--low">
                            <h3>Low</h3>
<AmmoniaLow/>
                        </section>
                    </section>
                    <section id="cycling">
                        <h2>Cycling</h2>
                        <hr/>
                        <p>Getting your system started</p>
                        <ComingSoon/>
                    </section>
                    <section id="fish">
                        <h2>Fish</h2>
                        <hr/>
<p>Common fish in aquaponics systems.<br/>If you don't find your species you can add new in the settings section.</p>
                        <section id="fish--barramundi">
                            <h3>Barramundi</h3>
                            <BarramundiInfo/>
                        </section>
                        <section id="fish--silver-perch">
                            <h3>Silver Perch</h3>
                            <SilverPerchInfoInfo/>
                        </section>
                        <section id="fish--trout">
                            <h3>Trout</h3>
                           <TroutInfo/>
                        </section>
                    </section>
                    <section id="ph">
                        <h2>pH</h2>
                        <hr/>
                        <section id="ph--basics">
                            <PhBasics/>
                        </section>
                        <section id="ph--high">
                            <h3>High</h3>
                            <p>Actions to take if pH is high</p>
                            <ComingSoon/>
                        </section>
                        <section id="ph--low">
                            <h3>Low</h3>
                            <p>Actions to take if pH is low</p>
                            <ComingSoon/>
                        </section>
                    </section>
                    <section id="temperature">
                        <h2>Temperature</h2>
                        <hr/>
                        <p>Temperature and it's relationship with water quality</p>
                        <section id="temperature--basics">
                            <ComingSoon/>
                        </section>
                        <section id="temperature--high">
                            <h3>High</h3>
                            <p>Actions to take if temperature is high</p>
                            <ComingSoon/>
                        </section>
                        <section id="temperature--low">
                            <h3>Low</h3>
                            <p>Actions to take if temperature is low</p>
                            <ComingSoon/>
                        </section>
                    </section>
                    <section id="credits">
                        <h2>Developers</h2>
                        <hr/>
                        <p>Meet the crew developing the app.</p>
                        <section id="credits--trevor">
                            <h3>Trevor Garrity</h3>
                            <p>...</p>
                        </section>
                        <section id="credits--dimitry">
                            <h3>Dimitry Radyukin</h3>
                            <p>...</p>
                        </section>
                        <section id="credits--anna">
                            <h3>Anna Osyatinskaya</h3>
                            <p>...</p>
                        </section>
                    </section>

                    <section id="resources">
                        <h2>Resources</h2>
                        <hr/>
                        <p>List of references for the information</p>
                        <ComingSoon/>
                    </section>
                    <section id="products">
                        <h2>Products</h2>
                        <hr/>
                        <p>Products for your system</p>
                        <ComingSoon/>
                    </section>

                </div>

            </main>
            </div>
        );
    }
}

export default AdviceWiki;


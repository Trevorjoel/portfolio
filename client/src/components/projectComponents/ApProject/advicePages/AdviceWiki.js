import React, {Component} from "react";
import classes from "./AdviceContainer.module.css";
import Chevron from "./Chevron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './style.css'

import TroutInfo from "./TroutInfo";
import Placeholder from "./Placeholder";


class AdviceWiki extends Component {


    render() {

        return (
            <main>
                <h2>System advice</h2>
                <br/><br/><br/>
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
                        <li className=""><a href="#resources">Resources</a></li>
                        <li className=""><a href="#products">Products</a></li>

                    </ol>
                </nav>
                <div>

                    <section id="introduction">
                        <h3>Introduction</h3>
                        <Placeholder/>
                    </section>
                    <section id="ammonia">
                        <h3>Ammonia</h3>
                        <Placeholder/>
                        <section id="ammonia--basics">
                            <h5>Basics</h5>
                            <Placeholder/>
                        </section>
                        <section id="ammonia--high">
                            <h5>High</h5>
                            <Placeholder/>
                        </section>
                        <section id="ammonia--low">
                            <h3>Low</h3>
                            <Placeholder/>
                        </section>
                    </section>
                    <section id="cycling">
                        <h2>Cycling</h2>
                        <Placeholder/>
                    </section>
                    <section id="fish">
                        <h2>Fish</h2>
                        <Placeholder/>
                        <section id="fish--barramundi">
                            <h3>Barramundi</h3>
                            <Placeholder/>
                        </section>
                        <section id="fish--silver-perch">
                            <h3>Silver Perch</h3>
                            <Placeholder/>
                        </section>
                        <section id="fish--trout">
                            <h3>Trout</h3>
                           <TroutInfo/>
                        </section>
                    </section>
                    <section id="resources">
                        <h2>Resources</h2>
                        <Placeholder/>
                    </section>
                    <section id="products">
                        <h2>Products</h2>
                        <Placeholder/>
                    </section>

                </div>

            </main>

        );
    }
}

export default AdviceWiki;

/*
*
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    if (entry.intersectionRatio > 0) {
                        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
                    } else {
                        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
                    }
                });
            });

            // Track all sections that have an `id` applied
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section);
            });
            console.log('running')
        });
        }
        *
        *
        *
        * */

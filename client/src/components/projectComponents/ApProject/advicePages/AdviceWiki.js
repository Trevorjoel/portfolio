import React, {Component} from "react";
import classes from "./AdviceContainer.module.css";
import Chevron from "./Chevron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './style.css'

import TroutInfo from "./TroutInfo";


class AdviceWiki extends Component {


    render() {
        window.addEventListener('DOMContentLoaded', () => {

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

        });
        return (
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
                        <li className=""><a href="#resources">Resources</a></li>
                        <li className=""><a href="#products">Products</a></li>

                    </ol>
                </nav>
                <div>
                    <h2>System advice</h2>
                    <br/><br/><br/>
                    <section id="introduction">
                        <h3>Introduction</h3>
                        <br/><br/><br/>
                        <p>…</p>
                    </section>
                    <section id="ammonia">
                        <h3>Ammonia</h3>
                        <p>Component</p>
                        <section id="ammonia--basics">
                            <h5>Basics</h5>
                            <p>Component</p>
                        </section>
                        <section id="ammonia--high">
                            <h5>High</h5>
                            <p>…</p>
                        </section>
                        <section id="ammonia--low">
                            <h3>Low</h3>
                            <p>Component</p>
                        </section>
                    </section>
                    <section id="cycling">
                        <h2>Cycling</h2>
                        <p>Component</p>
                    </section>
                    <section id="fish">
                        <h2>Fish</h2>
                        <section id="fish--barramundi">
                            <h3>Barramundi</h3>
                            <p>…</p>
                        </section>
                        <section id="fish--silver-perch">
                            <h3>Silver Perch</h3>
                            <p>Component</p>
                        </section>
                        <section id="fish--trout">
                            <h3>Trout</h3>
                           <TroutInfo/>
                        </section>
                    </section>
                    <section id="resources">
                        <h2>Resources</h2>
                        <p>Component</p>
                    </section>
                    <section id="products">
                        <h2>Products</h2>
                        <p>…</p>
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

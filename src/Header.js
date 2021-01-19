import React from 'react';
import Typing from 'react-typing-animation';
import {Link} from 'react-scroll'

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                    {(() => {
                        if (window.innerWidth > 700) {
                            return  (
                                <nav>

                                    <ul>
                                        <li className="nav-item"><a className="nav-link" href="#about">
                                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>about</Link>
                                        </a></li>
                                        <li className="nav-item"><a className="nav-link" href="#projects">
                                            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>projects</Link>
                                        </a></li>
                                        <li className="nav-item"><a className="nav-link" href="#contact">
                                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>contact</Link>
                                        </a></li>
                                    </ul>
                                </nav>
                            )
                        }
                        return null
                        })()}
                        <div id="coverImageContainer">
                            <h1 id="title"><Typing>hey hello there</Typing></h1>
                        </div>
            </header>
        )
    }
}

export default Header;

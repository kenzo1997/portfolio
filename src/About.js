import React from 'react';
import Typing from 'react-typing-animation';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div id="pic">
                    <div></div>
                </div>

                <div id="text">
                    <h2>ABOUT</h2>
                    <p>
                        <Typing speed={5}>
                            Student applied information technology.
                            I would describe myself as someone who is ambitious, flexible, and open
                            minded. I'm always trying to improve myself and learn new things.
                            If you have any further questions then don't hesitate to contact me.
                        </Typing>
                        <a href='./../../../index.html' download="CV" className="about-button">CV</a>
                        <a href='' download="resume" className="about-button">resume</a>
                    </p>

                </div>


            </div>
        )
    }
}

export default About;
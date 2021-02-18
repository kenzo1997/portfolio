//TODO: imporve style and tweak mobile friendly stuff better
import React from 'react';
import Typing from 'react-typing-animation';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAnime: 'text',
      picAnim: ""
    }
  }
  
  
  listenScrollEvent = e => {
      const { innerWidth: width, innerHeight: height } = window;
      if (window.scrollY > height - 200) {
        this.setState({
          textAnime: 'text textAnim',
          picAnim: "picReveal"
        })
      }   
  }
  
  componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
  }
  
    render() {
        return (
            <div id="about">
                <div className="pic">
                    <div class={this.state.picAnim}></div>
                </div>
                <div className={this.state.textAnime}>
                    <h2>ABOUT</h2>
                    <p>
                        <Typing speed={5}>
                            Student applied information technology.
                            I would describe myself as someone who is ambitious, flexible, and open
                            minded. I'm always trying to improve myself and learn new things.
                            If you have any further questions then don't hesitate to contact me.
                        </Typing>
                        <a href='' download="CV" className="about-button">CV</a>
                        <a href='' download="resume" className="about-button">resume</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default About;

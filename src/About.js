//TODO: imporve style and tweak mobile friendly stuff better
import React from 'react';
import Typing from 'react-typing-animation';
import './css/About.css';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAnime: 'text',
      picAnim: ""
    }
  }

  listenScrollEvent = e => {
    const { innerHeight: height, scrollY } = window;
    if (scrollY > height - 200) {
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
    const { innerHeight: height, scrollY } = window;

    return (
      <div id="about">
        <div className="pic">
          <div className={this.state.picAnim}></div>
        </div>
        <div className={this.state.textAnime}>
          <h2>ABOUT</h2>
          <p>
            {scrollY > height - 200 ?
              <Typing speed={0.2}>
                Hey! My name is Kenzo and I’m a web developer that loves to code.
                Exploring new stuff and technology is one of my favorite hobbies.
                I provides services for both the front end and back-end.
            </Typing>
              : null}
          </p>
        </div>
      </div>
    )
  }
}

export default About;

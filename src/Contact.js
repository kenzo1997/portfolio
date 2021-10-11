//TODO: keep working on style and optimize mobile responsiveness and clean up css
import {Component} from 'react'
import './css/Contact.css'

class Contact extends Component {
  constructor(props) {
      super(props)

      this.state = {
        formAnim: "formNonAnime"
      }
  }

  listenScrollEvent = e => {
      const { innerWidth: width, innerHeight: height } = window;
      if (window.scrollY > (height*3) - 450) {
        this.setState({formAnim: 'formAnim'})
      }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
  }

  //TODO work on check input funcion
  checkInput(c) {
    console.log(c)
  }

  render() {
        return (
            <div id="contact">
                <div id="formContainer">
                    <form action="" method="POST" enctype="multipart/form-data" name="EmailForm">
                        <h2>CONTACT</h2>
                        <label><input placeholder="e-mail" name="mail" onBlur={e => this.checkInput(e)} className={this.state.formAnim}/></label>
                        <label><textarea placeholder="Message" name="comment" onBlur={e => this.checkInput(e.target.value)} className={this.state.formAnim}></textarea></label>
                        <input value="Send" type="submit" className={this.state.formAnim}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;

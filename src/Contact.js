//TODO: make email work
import { Component } from 'react'
import './css/Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formAnim: "formNonAnime"
    }
  }

  listenScrollEvent = e => {
    const { innerHeight: height } = window;
    if (window.scrollY > (height * 3) - 450) {
      this.setState({ formAnim: 'formAnim' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()))
  }

  render() {
    return (
      <div id="contact">
        <div id="formContainer">
          <form action="http://localhost:8000/index.php" method="POST" encType="multipart/form-data" name="EmailForm">
            <h2>CONTACT</h2>
            <label><input placeholder="e-mail" name="email" onBlur={e => this.checkEmail(e.target.value)} className={this.state.formAnim} /></label>
            <label><textarea placeholder="Message" name="comment" className={this.state.formAnim}></textarea></label>
            <input value="Send" type="submit" className={this.state.formAnim} />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;

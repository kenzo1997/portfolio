//TODO: make mobile friendly
import {Component} from 'react'
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="contact">
                <div id="formContainer">
                    <form action='' method='post'>
                        <h2>CONTACT</h2>
                        <label><input placeholder="e-mail"/></label>
                        <label><input placeholder="Subject"/></label>
                        <label><textarea placeholder="Message"></textarea></label>
                        <input value="Send" type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;

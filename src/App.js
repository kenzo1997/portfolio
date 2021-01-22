//todo: uninstall aos package
import React from 'react';
import {useRef, useLayoutEffect} from 'react';

import './Reset.css';

import Header from './Header'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(window.scrollY);
        return (
            <div className="App">
              <Header/>
              <About/>
              <Projects/>
              <Contact/>
              <Footer/>
            </div>
        )
    }
}

export default App;
/*

*/

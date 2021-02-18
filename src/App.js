//todo: implement animation on scroll
//todo: refactor code
//todo: uninstall aos package
import React from 'react';
import {useRef, useLayoutEffect} from 'react';

import './css/Reset.css';
import './css/App.css'

import Header from './Header'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


class App extends React.Component {
    render() {
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


import React from 'react';

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
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;

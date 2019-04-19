import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import brahim from './components/img/brahim.jpg'


class App extends Component {

  render() {


    return (
      <div className="App">
        <Navbar />
        <div className="">

          <Home />
        </div>
        <div className="container-fluid about">
          <About />
        </div>
        <div className="container-fluid bg-secondary ">
          <Skills />
        </div>
        <hr />
        
        <Contact />
        
        


      </div>





    );
  }
}

export default App;

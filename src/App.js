import React, { Component } from 'react';
import SideBar from './SideBar';
import Contact from './Contact';
import Header from './Header';
import About from './About';
import Home from './Home';
import Game from './Game';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="container-scroller">
        <Header/>
      <div className="container-fluid page-body-wrapper">
        <SideBar/>
        <div className="main-panel">
          <div className="content-wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/game" component={Game} />
          </div>
        </div>
      </div>
    </div>
    </Router>
    );
  }
}

export default App;

$(document).ready(function(){
   $('.app-logo').click(function(){
       $('.sidebar').toggleClass('fliph');
   });
     
});

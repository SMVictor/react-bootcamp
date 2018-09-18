import React, { Component } from 'react';
import Contact from './Contact'
import SideBar from './SideBar'
import Header from './Header'
import About from './About'
import Home from './Home'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
             aaaa
          </div>
        </div>
      </div>
    </div>
    </Router>
    );
  }
}

export default App;

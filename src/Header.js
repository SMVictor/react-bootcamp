import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import './Header.css';


export default class Header extends Component {

  render() {
    return (
      <div className="navbar">
        <img src={logo} className="app-logo" alt="logo" /> 
      </div>
    );
  }
}
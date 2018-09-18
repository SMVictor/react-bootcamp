import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import profile from './profile.png';
import './Header.css';


export default class Header extends Component {

  showDropDownList() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  render() {
    return (
      <div className="navbar">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="dropdown">
          <button className="dropbtn" onClick={() => this.showDropDownList()} >¡Hola Víctor! 
            <img src={profile} className="profile" alt="profile" />
          </button>
          <div className="dropdown-content" id="myDropdown">
            <Link to='/'>Home</Link>
            <Link to='/About' >About</Link>
            <Link to='/Contact' >Contact</Link>
          </div>
        </div> 
      </div>
    );
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
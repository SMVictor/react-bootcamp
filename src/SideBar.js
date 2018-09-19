import React, { Component }           from 'react';
import { Link }                       from "react-router-dom";
import profile                        from './profile.png';
import './SideBar.css';

export default class SideBar extends Component {

  render() {
    return (
      <aside>
        <div className="sidebar left ">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={profile} className="profile" alt="profile" />
            </div>
            <div className="pull-left info">
              <p>Welcome!</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <ul className="list-sidebar bg-defoult">
            <li> <a href="#" data-toggle="collapse" data-target="#dashboard" className="collapsed active" > <i className="fa fa-th-large"></i> <span className="nav-label"> General </span> <span className="fa fa-chevron-left pull-right"></span> </a>
              <ul className="sub-menu collapse" id="dashboard">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About' >About</Link></li>
                <li><Link to='/Contact' >Contact</Link></li>
              </ul>
               <li> <a href="/Game"><i class="fa fa-gamepad"></i> <span class="nav-label">Tic Tac Toe</span> </a></li>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
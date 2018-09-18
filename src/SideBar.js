import React, { Component } from 'react';
import './SideBar.css';

export default class SideBar extends Component {
  render() {
    return (
      <aside>
	    <div class="sidebar left ">
	      <div class="user-panel">
	        <div class="pull-left image">
	          <img src="http://via.placeholder.com/160x160" class="rounded-circle" alt="User Image" />
	        </div>
	        <div class="pull-left info">
	          <p>bootstrap develop</p>
	          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
	        </div>
	      </div>
	      <ul class="list-sidebar bg-defoult">
	        <li> <a href="#" data-toggle="collapse" data-target="#dashboard" class="collapsed active" > <i class="fa fa-th-large"></i> <span class="nav-label"> Dashboards </span> <span class="fa fa-chevron-left pull-right"></span> </a>
	          <ul class="sub-menu collapse" id="dashboard">
	            <li class="active"><a href="#">CSS3 Animation</a></li>
	          </ul>
	        </li>
          </ul>
        </div>
      </aside>
    );
  }
}
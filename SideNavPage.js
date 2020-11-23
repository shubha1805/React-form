import React from 'react';
import { Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import "../css/SideBar.css";



function SideNavPage() {
  const navstyle = {
    color: 'white'
  }
  return (
    <div className="sidebar">
      <div className="side">
        <nav>
          <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
          <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
          <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
          <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
        </nav>
      </div>
    </div>

  )
}

export default SideNavPage

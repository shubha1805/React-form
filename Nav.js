import React from "react";
import './../App.css';
import { Button } from "react-bootstrap";

function Nav() {

    return (
        <nav class="navbar navbar-expand-sm  navbar-dark">
       <a class="navbar-brand" href="#">Logo</a>
         <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;
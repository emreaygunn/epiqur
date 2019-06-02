import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import People from "./People";
import About from "./About";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <ul className="header col-md-1">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/people">People</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <div className="content col-md-11">
              <Route exact path="/" component={Home}/>
              <Route path="/people" component={People}/>
              <Route path="/about" component={About}/>              
            </div>
          </div>
        </HashRouter>
      );
    }
}
 
export default Main;
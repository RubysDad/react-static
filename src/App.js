import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends Component {
  render() {
    var user = {
      name: "Tabitha",
      hobbies: ["Triathlon", "Figure Skating"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Mark"} age={25} user={user}>
              <p>React and Rails</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
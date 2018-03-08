import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends Component {
  constructor(){
    super();
    this.state = {
      homeLink: "Home"
    };
  }
  
  onGreet() {
    alert("Hello");
  }
  
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home 
              name={"Mark"} 
              initialAge={26} 
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
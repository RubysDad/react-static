import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
      		<Navbar.Header>
      			<Navbar.Brand>
      				<a href="#home">Mulberry Cloud</a>
      			</Navbar.Brand>
      		</Navbar.Header>
      		<Nav>
      			<NavItem eventKey={1} href="#">
      				Home
      			</NavItem>
      			<NavItem eventKey={2} href="#">
      				About
      			</NavItem>
      			<NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
      				<MenuItem eventKey={3.1}>Action</MenuItem>
      				<MenuItem eventKey={3.2}>Another action</MenuItem>
      				<MenuItem eventKey={3.3}>Something else here</MenuItem>
      				<MenuItem divider />
      				<MenuItem eventKey={3.4}>Separated link</MenuItem>
      			</NavDropdown>
      		</Nav>
      	</Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Mulberry Cloud</h1>
        </header>
        <p className="App-intro">
          Modern day solutions
        </p>
      </div>
    );
  }
}

export default App;

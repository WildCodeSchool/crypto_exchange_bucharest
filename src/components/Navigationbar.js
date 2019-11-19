import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Navigationbar extends Component {
  render() {
    return (

      <div className="color">
        <Navbar expand="lg">
          <Navbar.Brand href="#home"><img id="myGoat" alt='' src={this.props.goat} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div class="font ml-auto" >
              <Nav>
                <Nav.Link href="#link0"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Markets</h4></Nav.Link>
                <Nav.Link href="#link1"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Orders</h4></Nav.Link>
                <Nav.Link href="#link2"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Wallet</h4></Nav.Link>
                <Nav.Link href="#link3"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Log In</h4></Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}

export default Navigationbar;

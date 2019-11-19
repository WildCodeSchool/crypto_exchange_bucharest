import React from 'react';
import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';


import MainPage from './login-page'
import './App.css';
import NavSwitch from './Switch';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true
    }
  }
  isLoginVisible = (wasPresed) => {
    if (wasPresed === false) {
      this.setState({
        loginVisible: !this.state.loginVisible
      })
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.loginVisible ?
          (<MainPage nume={this.isLoginVisible} />)
          :
          <div>
          <Navbar expand="lg">
            <Navbar.Brand href="#home"><img id="myGoat" alt='' src={this.props.goat} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div class="font ml-auto" >
                <Nav>
                  <Nav.Link href="markets"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Markets</h4></Nav.Link>
                  <Nav.Link href="orders"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Orders</h4></Nav.Link>
                  <Nav.Link href="wallet"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Wallet</h4></Nav.Link>
                  <Nav.Link href="log-in"><h4 className={this.props.dark ? 'light-color' : 'dark-color'}>Log In</h4></Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Navbar>

        <div className={this.state.dark ? 'dark' : 'light'}>                 

          <NavSwitch dark={this.state.dark} handle={this.handleClick} />

        </div>
        </div>
        }


        
            
      </div>
    );
  }
}
export default App;

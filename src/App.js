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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wallet from './Wallet';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true,
      dark: false
    }
  }
  handleClick = () => {
    this.setState({ dark: !this.state.dark })
}
  isLoginVisible = (wasPresed) => {
    if (wasPresed === false) {
      this.setState({
        loginVisible: false
      })
    }
  }
  render() {
    return (
      <div className="App" style={this.state.dark ? {backgroundColor: 'white'} :
      {backgroundColor: 'black'}}>
        {this.state.loginVisible ?
          (<MainPage nume={this.isLoginVisible} />)
          :
          <BrowserRouter>

            <div>
              <Navbar expand="lg" >
                <Navbar.Brand href="#home"><img id="goat" alt='' src={require('./goat.png')} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <div class="font ml-auto" >
                    <Nav>
                      <NavLink to="/markets"><h4 className={this.state.dark ? 'light-color' : 'dark-color'}>Markets</h4></NavLink>
                      <NavLink to="/orders"><h4 className={this.state.dark ? 'light-color' : 'dark-color'}>Orders</h4></NavLink>
                      <NavLink to="/wallet"><h4 className={this.state.dark ? 'light-color' : 'dark-color'}>Wallet</h4></NavLink>
                      <NavLink to="/log-in"><h4 className={this.state.dark ? 'light-color' : 'dark-color'}>Log In</h4></NavLink>
                    </Nav>
                  </div>
                </Navbar.Collapse>
              </Navbar>
              <div className={this.state.dark ? 'dark' : 'light'}>
                <NavSwitch dark={this.state.dark} handle={this.handleClick} />
              </div>
            </div>
            <div>
            <Switch>
              <Route path="/markets">
                <h1>Markets</h1>
              </Route>
              <Route path="/orders">
                <h1>Orders</h1>
              </Route>
              <Route path="/wallet">
                <Wallet/>
              </Route>
            </Switch>
            </div>
          </BrowserRouter>
        }




      </div>
    );
  }
}
export default App;

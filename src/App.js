import React from 'react';
import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
  NavLink
} from 'react-router-dom';


import MainPage from './login-page'
import './App.css';

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
          : <h1>YEEEEEEEEEEEEe</h1>}

        {/* <BrowserRouter>

        </BrowserRouter> */}
        
      </div>
    );
  }
}
export default App;

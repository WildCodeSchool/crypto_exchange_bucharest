import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Wallet from './Wallet';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canShowWallet: false
    }
  }
  render() {
    return (
      <div className="App">

        <Wallet canShow />
      </div>
    );
  }
}

export default App;

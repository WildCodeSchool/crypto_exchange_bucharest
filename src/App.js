import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <br/>
        <Wallet/>  
      </div>
    );
  }
}

export default App;

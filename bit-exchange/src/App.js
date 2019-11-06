import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wallet from './Wallet';
import EnhancedTable from './EnhancedTable';


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
        <Wallet/>
        <EnhancedTable/>
      </div>
    );
  }
}

export default App;

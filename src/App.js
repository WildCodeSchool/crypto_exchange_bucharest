import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./components/Navigationbar";
import Switch from "./components/Switch"
import logo from './components/goat.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: true
    }
  }
  handleClick = () => {
    this.setState({ dark: !this.state.dark })
  }
  render() {
    return (

    <div>
        <header>
          
            <Navigationbar dark={this.state.dark} goat={logo} />

        </header>

           <body className={this.state.dark ? 'dark' : 'light'}>

             <Switch dark={this.state.dark} handle={this.handleClick} />
        
                <div className='body-text'>
                    <h2 className={this.state.dark? 'whitep':'blackp'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut repellat maxime accusantium quasi temporibus animi laudantium fuga vel, eligendi impedit et laborum quis blanditiis ea maiores quo, dolore totam.</h2><br/>
                </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            </body>


    </div>




    );
  }
}

export default App;

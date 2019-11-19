import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './pure.css';

class MainPage extends Component {
    render() {
        return (
    
    <div className="login">
    <img className="image"src='https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'/>
    <div className="container"> 
    <div className="text">
    <form class="pure-form pure-form-stacked">
    {/* <fieldset> */}
       
    
        {/* <label for="email">Email</label> */}
        <input id="email" type="email" placeholder="Email"/>
        {/* <span class="pure-form-message">This is a required field.</span> */}
         <br></br><br></br>
        {/* <label for="password">Password</label> */}
        <input id="password" type="password" placeholder="Password"/>

        {/* <label for="state">State</label>
        <select id="state">
            <option>AL</option>
            <option>CA</option>
            <option>IL</option>
        </select> */}

        <label className= "Checkbox"for="remember" class="pure-checkbox">
            <input id="remember" type="checkbox"/> Remember me
        </label>
     
        {/* <label for="cb" class="pure-checkbox">
            <input id="cb" type="checkbox"/> I've read the terms and conditions
        </label> */}

        <button type="submit" class="pure-button pure-button-primary">Sign in</button>
    {/* </fieldset> */}
    
    </form>
    </div>
            
    </div>
    </div>
        )
    }
}

export default MainPage
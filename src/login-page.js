import React, { Component } from 'react';
import './pure.css';

class MainPage extends Component {

    handleClick = () => {
        this.props.nume(false)
    }
    render() {
        return (
            <div className="login">
                <img className="image" src='https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80' />
                <div className="container">
                    <div className="text">
                        <form class="pure-form pure-form-stacked">
                            <input id="email" type="email" placeholder="Email" />
                            <br></br><br></br>
                            <input id="password" type="password" placeholder="Password" />
                            <label className="Checkbox" for="remember" class="pure-checkbox">
                                <input id="remember" type="checkbox" />Remember me
                            </label>
                            <button onClick={this.handleClick} class="pure-button pure-button-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage
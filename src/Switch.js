
import React, { Component } from 'react';
import './Switch.css'
import { Form } from 'react-bootstrap';

class NavSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dark: this.props.dark,
            handle: this.props.handle
        }
    }
    handleClick = () => {
        this.setState({ dark: !this.state.dark })
    }
    render() {

        return (
            <Form className={`switchdiv ${this.props.dark ? 'dark' : 'light'}`}>
                <Form.Check
                    type="switch"
                    id="custom-switch3"
                    label=""
                    onClick={this.props.handle}
                />
            </Form>
        )
    }
}

export default NavSwitch;
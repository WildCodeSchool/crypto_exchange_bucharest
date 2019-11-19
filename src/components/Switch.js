import React, { Component } from 'react';
import './Switch.css'
import { Form } from 'react-bootstrap';

class Switch extends Component {

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
    // var dark= this.props.dark;

    return (
      // <div className={`switchdiv ${this.props.dark? 'darks':'lights'}`}>

      //     {/* <label className="switch" >
      //         <span className="slider"></span>
      //         <input type="checkbox" onClick={this.props.handle}/>
      //     </label> */}
      //  </div>

      <Form className={`switchdiv ${this.props.dark ? 'dark' : 'light'}`}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label=""
          onClick={this.props.handle}
        />
      </Form>
    )
  }
}

export default Switch;
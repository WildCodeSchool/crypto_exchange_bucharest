import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Image,
    Form,
    ButtonToolbar
} from 'react-bootstrap';
import loginImage from './login_background.jpg'

class MainPage extends Component {

    handleClick = () => {
        this.props.nume(false)
    }
    render() {
        return (
            <div className="loginPage">
                {/* <Image className="loginImage" src={loginImage}/> */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="text">
                    <Row>
                        <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                            <Form>
                                <Form.Group className='loginForm'>
                                    <Form.Control type="textarea" placeholder="Username" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                            <Form>
                                <Form.Group className='loginForm'>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <button onClick={this.handleClick} variant="primary">Sign in</button>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br /><br />
            </div>

        )
    }
}

export default MainPage
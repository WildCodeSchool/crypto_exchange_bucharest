import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleActive: true
        }
    }
    onToggle = () => {
        this.setState({ toggleActive: !this.state.toggleActive });
    }
    render() {
        return (
            <div className="Wallet">
                <div className="container-fluid" sm="true" id="walletNav" >
                    <Row id="koolButtons">
                            <div className="btn-group btn-group-toggle btn-group-lg mw-50 p-3" data-toggle="buttons">
                                <label htmlFor='Balances' className="btn btn-secondary active">
                                    <input type="radio" name="options" id="Balances" autoComplete="off" checked />Balances</label>

                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="Deposits" autoComplete="off" />Deposits</label>

                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="Withdrawals" autoComplete="off" />Withdrawals</label>
                            </div>
                        <div className='custom-control custom-switch'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customSwitches'
                                readOnly />
                            <label className='custom-control-label' htmlFor='customSwitches' id="switch">Show zero balances</label>
                        </div>
                        <Col className="m-25 p-3">
                            <Form.Control size="lg" placeholder="Find..." />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Wallet;
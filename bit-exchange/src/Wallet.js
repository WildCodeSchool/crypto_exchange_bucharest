import React, { Component } from 'react';

import {Container} from 'react-bootstrap';
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
                <Container sm="true" id="walletNav" >
                    <Row id="koolButtons">
                        <div className="col">
                            <div className="btn-group btn-group-toggle btn-group-lg mw-50" data-toggle="buttons">

                                <label htmlFor='Balances' className="btn btn-secondary active">
                                    <input type="radio" name="options" id="Balances" autocomplete="off" checked />Balances</label>

                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="Deposits" autocomplete="off" />Deposits</label>

                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="Withdrawals" autocomplete="off" />Withdrawals</label>
                            </div>
                        </div>

                        <div className='custom-control custom-switch'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customSwitches'
                                readOnly/>
                            <label className='custom-control-label' htmlFor='customSwitches'>Show zero balances</label>
                        </div>
                        <Col className="mw-100"><Form.Control size="lg" placeholder="Find..." /></Col>
                    </Row>
                </Container>



                <Container sm="true" id="content">

                    <Row id="listTags">
                        <div className="col">Symbol</div>
                        <div className="col">Currency</div>
                        <div className="col">Aviable Price</div>
                        <div className="col">Reserved</div>
                        <div className="col">Total</div>
                        <div className="col">Est. BTC Value</div>
                        <div className="col">24H Change</div>
                        <div className="col">Actions</div>
                    </Row>

                    <br />

                    <Row id="testCurrency">
                        <div className="col">btc</div>
                        <div className="col">BitCoin</div>
                        <div className="col">9001$</div>
                        <div className="col">All</div>
                        <div className="col">More</div>
                        <div className="col">9002$</div>
                        <div className="col">+300%</div>
                        <div className="col">GetRich</div>
                    </Row>
                    <Row id="testCurrency">
                        <div className="col">btc</div>
                        <div className="col">BitCoin</div>
                        <div className="col">9001$</div>
                        <div className="col">All</div>
                        <div className="col">More</div>
                        <div className="col">9002$</div>
                        <div className="col">+300%</div>
                        <div className="col">GetRich</div>
                    </Row>
                    <Row id="testCurrency">
                        <div className="col">btc</div>
                        <div className="col">BitCoin</div>
                        <div className="col">9001$</div>
                        <div className="col">All</div>
                        <div className="col">More</div>
                        <div className="col">9002$</div>
                        <div className="col">+300%</div>
                        <div className="col">GetRich</div>
                    </Row>
                    <Row id="testCurrency">
                        <div className="col">btc</div>
                        <div className="col">BitCoin</div>
                        <div className="col">9001$</div>
                        <div className="col">All</div>
                        <div className="col">More</div>
                        <div className="col">9002$</div>
                        <div className="col">+300%</div>
                        <div className="col">GetRich</div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Wallet;
import React from 'react';
import {
    Row,
    Col,
    Button,
    Form,
    ButtonToolbar
} from 'react-bootstrap';
import {
    Route,
    BrowserRouter,
    Redirect,
    Switch,
    NavLink
} from 'react-router-dom';
import axios from 'axios';
import Balances from './Balances';
import Deposits from './Deposits';
import Withdrawals from './Withdrawals';


class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: [],
            apiData: {}
        }
    }

    componentDidMount() {
        axios.all([
            axios.get('https://rest.coinapi.io/v1/assets?apikey=D3D1CCD0-1097-499D-8937-47BF150A7EDB')
        ])
            .then(axios.spread((x) => {
                let myStuff = [];
                let btcCurrentPrice = 0;
                btcCurrentPrice = x.data[x.data.map(e => e.asset_id).indexOf("BTC")]['price_usd'];
                x.data.map(item => {
                    if ("price_usd" in item && 'asset_id' in item && 'name' in item) {
                        if (item.name === 'Bitcoin') {
                            myStuff.push({
                                price_usd: parseFloat(item[`price_usd`]).toFixed(2),
                                price_btc: 1,
                                asset_id: item['asset_id'],
                                name: item['name'],
                                dayVolume: item['volume_1hrs_usd'].toFixed(3)
                            })
                        }
                        else if (item.asset_id !== 'WBTC' &&
                            item.asset_id !== 'WTB' &&
                            item.asset_id !== '4BTC' &&
                            item.asset_id !== 'RBTC' &&
                            item.asset_id !== 'WBT' &&
                            item.asset_id !== 'BTC' &&
                            item.price_usd > 0.03) {
                            myStuff.push({
                                price_usd: item[`price_usd`].toFixed(2),
                                price_btc: ((parseFloat(item[`price_usd`], 10) / parseFloat(btcCurrentPrice, 10))).toFixed(9),
                                asset_id: item['asset_id'],
                                name: item['name'],
                                dayVolume: item['volume_1hrs_usd'].toFixed(3)
                            })
                        }
                    }
                })
                this.setState(this.state = {
                    apiData: myStuff,
                    coin: myStuff.asset_id,
                    activePage: 1,
                    btcPrice: myStuff.btcPrice
                })
            }))
    }

    render() {
        return (
            <div className="Wallet">
                <div className="container" sm="true" id="walletNav" >
                    <BrowserRouter>
                        <Row id="koolButtons">
                            <Col md={4}>
                                <ButtonToolbar>
                                    <NavLink className='px-1 py-1' exact to="/balances">
                                        <Button variant="secondary">Balances</Button>
                                    </NavLink>
                                    <NavLink className='px-1 py-1' exact to="/deposits">
                                        <Button variant="secondary">Deposits</Button>
                                    </NavLink>
                                    <NavLink className='px-1 py-1' exact to="/withdrawals">
                                        <Button variant="secondary">Withdrawals</Button>
                                    </NavLink>
                                </ButtonToolbar>
                            </Col>
                            <Col>
                            <Form.Group className='py-2'>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Show zero balances"
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form>
                                <Form.Group className='px-1 py-1'>
                                    <Form.Control type="textarea" placeholder="Search for an asset..." />
                                </Form.Group>
                            </Form>
                            </Col>
                        </Row>

                        <div className="container" sm='true'>
                            <Row>
                                <Switch>
                                    <Route path="/balances">
                                        <Balances myDataStuff = {this.state.apiData} coinz={this.state.coin} />
                                    </Route> />
                            <Route path="/deposits">
                                        <Deposits />
                                    </Route> />
                            <Route path="/withdrawals">
                                        <Withdrawals />
                                    </Route> />
                                <Redirect to='/balances' />
                                </Switch>
                            </Row>
                        </div>
                    </BrowserRouter>
                </div>
            </div >
        );
    }
}

export default Wallet;
import React from 'react';
import {
    Row,
    Col,
    Button,
    ButtonToolbar
} from 'react-bootstrap';
import {
    Route,
    BrowserRouter,
    Switch,
    NavLink
} from 'react-router-dom';
import Balances from './Balances';
import Deposits from './Deposits';
import Withdrawals from './Withdrawals';


class Wallet extends React.Component {
    constructor(props) {
        super(props);
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
                                        <Button>Balances</Button>
                                    </NavLink>
                                    <NavLink className='px-1 py-1' exact to="/deposits">
                                        <Button>Deposits</Button>
                                    </NavLink>
                                    <NavLink className='px-1 py-1' exact to="/withdrawals">
                                        <Button>Withdrawals</Button>
                                    </NavLink>
                                </ButtonToolbar>
                            </Col>

                        </Row>
                        <div className="container" sm='true'>
                                <Row>
                            <Switch>
                                <Route path="/balances">
                                    <Balances />
                                </Route> />
                            <Route path="/deposits">
                                    <Deposits />
                                </Route> />
                            <Route path="/withdrawals">
                                    <Withdrawals />
                                </Route> />
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
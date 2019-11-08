import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';
import Balances from './Balances';
import Deposits from './Deposits';
import Withdrawals from './Withdrawals';


class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'BALANCES'
        }
    }
    handleBalances = () =>{
        this.setState( {active:'BALANCES'})
        console.log(this.state.active)
    }
    handleDeposits = () =>{
        this.setState( {active:'DEPOSITS'})
        console.log(this.state.active)
    }
    handleWithdrawals = () =>{
        this.setState( {active:'WITHDRAWALS'})
        console.log(this.state.active)
    }
    render() {

        return (
            <div className="Wallet">
                <div className="container-fluid" sm="true" id="walletNav" >
                    <Row id="koolButtons">
                        <Col md={1}>
                            <ToggleButtonGroup vertical type="checkbox" defaultValue={'BALANCES'}>
                                <ToggleButton variant="dark" value={'BALANCES'} onClick={this.handleBalances}>Balances</ToggleButton>
                                <ToggleButton variant="dark" value={'DEPOSITS'} onClick={this.handleDeposits}>Deposits</ToggleButton>
                                <ToggleButton variant="dark" value={'WITHDRAWALS'} onClick={this.handleWithdrawals}>Withdrawals</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>

                        <Col md={{span: 7,offset: 1}}>
                            <Form.Control size="sm" placeholder="Find..." />
                        </Col>

                        <Col md={3}>
                            <Form >
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Check this switch"
                                />
                            </Form>
                        </Col>
                    </Row>
            <Col>
            <Balances/>
            </Col>
                </div>        
            </div >
        );
    }
}

export default Wallet;
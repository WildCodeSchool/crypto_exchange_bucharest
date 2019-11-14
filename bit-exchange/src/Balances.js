import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';



const columns = [{
    dataField: 'asset_id',
    text: 'Symbol',
    filter: textFilter(),
    headerStyle: (colum, colIndex) => {
        return { width: '90px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'name',
    text: 'Currency',
    filter: textFilter(),
    headerStyle: (colum, colIndex) => {
        return { width: '210px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'aviableBalance',
    text: 'Aviable Balance',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '170px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'total',
    text: 'Total',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '150px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'price_btc',
    text: 'Est. BTC Value',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '170px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'price_usd',
    text: 'Est. USD Value',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '170px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'dayVolume',
    text: '24H Volume',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '150px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}];
const pageButtonRenderer = ({
    page,
    active,
    onPageChange
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        onPageChange(page);
    };
    const activeStyle = {
        margin : '3px',
        // left: '200px'
    };
    if (active) {
        activeStyle.filter = 'brightness(75%)';

    }
    return (
            <ButtonGroup className="page-item">
                <Button
                    variant="secondary"
                    href="#"
                    onClick={handleClick}
                    style={activeStyle}>
                    {page}
                </Button>
            </ButtonGroup>

    );
};

const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange
}) => (
        <div className="btn-group" role="group">

            <DropdownButton
                drop={'up'}
                variant="secondary"
                title={`Show per page`}
                id={`dropdown-button-drop-up`}
                key={'up'}>
                {
                    options.map(option => (

                        <Dropdown.Item
                            as='button'
                            eventKey={option.text}
                            onClick={() => onSizePerPageChange(option.page)}>
                            {option.text}
                        </Dropdown.Item>

                    ))
                }
            </DropdownButton>
            <Col md={{
                span: 9
            }} >
                <Form >
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Show zero balances"
                    />
                </Form>
            </Col>
        </div>
    );

const options = {
    pageButtonRenderer,
    sizePerPageRenderer
};

export default class Balances extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coin: [],
            activePage: 1,
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

    handlePageChange(pageNumber) {
        this.setState(this.state = { activePage: pageNumber })
    }

    render() {
        return (
            <div className='Balances container p-1' sm='true'>
                <br />
                <BootstrapTable
                    keyField="id"
                    data={this.state.apiData}
                    columns={columns}
                    striped
                    hover
                    condensed
                    pagination={paginationFactory(options)}
                    filter={filterFactory()}
                />

            </div>
        )
    }
}

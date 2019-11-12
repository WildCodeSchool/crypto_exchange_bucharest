import React, { Component } from 'react'
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';



const columns = [{
    dataField: 'asset_id',
    text: 'Symbol',
    filter: textFilter()
}, {
    dataField: 'name',
    text: 'Currency',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'aviableBalance',
    text: 'Aviable Balance',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    }
}, {
    dataField: 'total',
    text: 'Total',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    }
}, {
    dataField: 'price_btc',
    text: 'Est. BTC Value',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    }
}, {
    dataField: 'price_usd',
    text: 'Est. USD Value',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    }
}, {
    dataField: 'dayVolume',
    text: '24H Volume',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
}];

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
                                price_usd: parseFloat(item[`price_usd`]).toFixed(9),
                                price_btc: 1,
                                asset_id: item['asset_id'],
                                name: item['name'],
                                dayVolume: item['volume_1hrs_usd'].toFixed(9)
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
                                price_usd: item[`price_usd`].toFixed(9),
                                price_btc: ((parseFloat(item[`price_usd`], 10) / parseFloat(btcCurrentPrice, 10))).toFixed(9),
                                asset_id: item['asset_id'],
                                name: item['name'],
                                dayVolume: item['volume_1hrs_usd'].toFixed(9)
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
                    pagination={paginationFactory()}
                    filter={ filterFactory()}
                />
            </div>
        )
    }
}

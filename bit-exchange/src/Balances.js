import React, { Component } from 'react'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [{
    dataField: 'asset_id',
    text: 'Symbol'
}, {
    dataField: 'name',
    text: 'Currency',
    sort: true
}, {
    dataField: 'aviableBalance',
    text: 'Aviable Balance',
    sort: true
}, {
    dataField: 'total',
    text: 'Total',
    sort: true
}, {
    dataField: 'price_btc',
    text: 'Est. BTC Value',
    sort: true
}, {
    dataField: 'price_usd',
    text: 'Est. USD Value',
    sort: true
}, {
    dataField: 'dayChange',
    text: '24H Change',
    sort: true
}, {
    dataField: 'actions',
    text: 'Actions'
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
            axios.get('https://rest.coinapi.io/v1/assets?apikey=D3D1CCD0-1097-499D-8937-47BF150A7EDB'),
            axios.get(`https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=D3D1CCD0-1097-499D-8937-47BF150A7EDB`)
        ])
            .then(axios.spread((x, y) => {
                let myStuff = [];
                let btcCurrentPrice = 0;
                console.log(x.data)
                let btc =[];
                x.data.map(item => {
                    // console.log(item.)

                 
                    if ("price_usd" in item && 'asset_id' in item && 'name' in item) {
                        if(item.name === 'Bitcoin'){
                            btcCurrentPrice = parseFloat(item[`price_usd`])
                            
                            myStuff.push({
                                price_usd: parseFloat(item[`price_usd`]),
                                price_btc: 1,
                                asset_id: item['asset_id'],
                                name: item['name']
                            })
                        }
                        
                        if (item.asset_id !== 'WBTC' &&
                            item.asset_id !== 'WTB' &&
                            item.asset_id !== '4BTC' &&
                            item.asset_id !== 'RBTC' &&
                            item.asset_id !== 'WBT' &&
                            item.asset_id !== 'BTC' &&
                            item.price_usd > 0.03) {
                            myStuff.push({
                                price_usd: parseFloat(item[`price_usd`], 10),
                                price_btc:  (parseFloat(item[`price_usd`], 10) / parseFloat(btcCurrentPrice, 10)).toFixed(9),
                                asset_id: item['asset_id'],
                                name: item['name'],
                            })



                            console.log([item[`price_usd`], btcCurrentPrice])
                            // console.log([parseFloat(btcCurrentPrice, 10) ,typeof parseFloat(btcCurrentPrice, 10)])




                        }
                    }
                })
                console.log(myStuff)

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
                />
            </div>
        )
    }
}

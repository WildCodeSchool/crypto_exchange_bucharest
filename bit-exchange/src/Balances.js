import React, {
    Component,
    useState,
    useEffect
} from 'react'
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
    text: 'Aviable Balance'
}, {
    dataField: 'total',
    text: 'Total',
    sort: true
}, {
    dataField: 'price_btc',
    text: 'Est. BTC Value'
}, {
    dataField: 'price_usd',
    text: 'Est. USD Value',
    sort: true,

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
                console.log(x.data)
                x.data.map(item =>{
                    // console.log(item.)
                    if ("price_usd" in item && 'asset_id' in item && 'name' in item ){
                        myStuff.push({price_usd: item[`price_usd`].toFixed(6),
                                      asset_id: item['asset_id'],
                                      name: item['name']})
                    }

                })
                console.log(myStuff)
                // this.setState(this.state = {
                //     apiData: x.data,
                //     coin: x.data.asset_id,
                //     activePage: 1
                // })
                    // console.log(y.data.rate)
                    // console.log(x.data)
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

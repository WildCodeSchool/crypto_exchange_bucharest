import React, { Component } from 'react'
import axios from 'axios';

export default class Balances extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coin: []
        }
    }
    componentDidMount() {
        axios.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=D3D1CCD0-1097-499D-8937-47BF150A7EDB')
            .then(x => {
                console.log(x.data);
                    this.setState(this.state =
                        {
                        coin: x.data.asset_id_base
                    })
                
            })
    }




    render() {
        return (
            <div className='Balances container'>
                BALANCES 
                <br/>
               {this.state.coin}
            </div>
        )
    }
}

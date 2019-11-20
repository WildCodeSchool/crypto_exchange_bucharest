import React from 'react';
import axios from 'axios';


class Api extends React.Component {
    componentDidMount() {
        axios.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=D3D1CCD0-1097-499D-8937-47BF150A7EDB')
            .then(x => {
                console.log(x.data.asset_id_base)
            })
    }
    render() {
        return null;
    }
}

export default Api;
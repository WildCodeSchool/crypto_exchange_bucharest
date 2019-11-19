import React,{Component} from 'react';
import './App.css';
import Chart from 'react-apexcharts';
import Card from "./Crypto-card/Card";
import OrderBook from "./OrderBook";
import StickyFooter from "./StickyFooter"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        price: "",
      options: {
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
      series: [{
        data: []
      }],
    }
  }
  componentDidMount() {
    // const { symbol } = this.state
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym='+'BTC'+'&tsym='+'USD')
        .then(resp => resp.json())
        .then(json => {
            var data = [];
         console.log(json.Data.Data);
         json.Data.Data.map((item, index) => {
             if (index < 100) {
                 var currentObj = {
                     x: item.time,
                     y: [item.close, item.high, item.low, item.open]
                 }
                 data.push(currentObj);
                 this.setState({price:data[data.length-1].y[0]});
             }
         });
            this.setState({
                series: [{data}]
            })
            console.log(this.state.series);
          })
  }

  render() {
var {options, series, price} = this.state;
    return (
<div>
        <Card name="Bitcoin"
            symbol="BTC"
            price={price}/>

        <Chart options={options} series={series} type="candlestick" width={1200} height={400}/>
                 <div>
                      <h2>Crypto Order Book </h2>
                 <OrderBook />
                 </div>
</div>
    )
  }
}


export default App;
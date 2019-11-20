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
    headerStyle: () => {
        return { width: '90px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'name',
    text: 'Currency',
    headerStyle: () => {
        return { width: '210px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'aviableBalance',
    text: 'Available Balance',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: () => {
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
    headerStyle: () => {
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
    headerStyle: () => {
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
    headerStyle: () => {
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
    headerStyle: () => {
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
            coin: this.props.coinz,
            activePage: 1,
            apiData: this.props.myDataStuff
        }
    }

    handlePageChange(pageNumber) {
        this.setState(this.state = { activePage: pageNumber })
    }

    render() {
        if(this.state.apiData !== this.props.myDataStuff){
        this.setState({
            apiData: this.props.myDataStuff
        })}
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
                    filter={this.state.apiData.length > 0  ? filterFactory() : null}
                />

            </div>
        )
    }
}

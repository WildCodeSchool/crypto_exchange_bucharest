
import React, { Component, useState } from 'react';
import {
    Row,
    Col,
    Button, 
    ButtonGroup,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Modal from 'react-bootstrap/Modal'

let myLocalData = [{}]

const estimatedHolding = [{
    dataField: 'cryptocurrencies',
    text: 'Cryptocurrencies',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'fiat',
    text: 'Fiat Balance',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'total',
    text: 'Total Holding',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'aproxBtcValue',
    text: 'Aprox. BTC Value',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}]

const historyColumns = [{
    dataField: 'date',
    text: 'Date',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'asset_id',
    text: 'Symbol',
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'quantity',
    text: 'Quantity',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'status',
    text: 'Status',
    sort: true,
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}];

const pendingColumns = [{
    dataField: 'lastChecked',
    text: 'Last Checked',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'asset_id',
    text: 'Symbol',
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'quantity',
    text: 'Quantity',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}, {
    dataField: 'confirmations',
    text: 'Confirmations',
    sort: true,
    sortFunc: (a, b, order) => {
        if (order === 'asc') return a - b;
        else return b - a;
    },
    headerStyle: (colum, colIndex) => {
        return { width: '300px', textAlign: 'center' };
    },
    style: { textAlign: 'center' }
}];

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Deposits
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Withdrawals</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kaching!Kaching!Kaching!...more money sounds...Kaching!Kaching!Kaching!...Cashing Stuff...Kaching!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Deposit
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

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
        margin: '3px',
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

export default class Withdrawals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coin: this.props.coinz,
            activePage: 1,
            apiData: this.props.myDataStuff
        }
    }
    render() {
        return (
            <div className='Withdrawals container'>
   <br />
                <Row>
                    <Col>
                        <h3>Estimated Holdings</h3>
                    </Col>
                    <Col>
                        <h3>BTC:</h3> {this.estimatedHolding}
                    </Col>
                    <Col>
                        <h3>USD:</h3> {this.estimatedHolding}
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        <Example />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h3>Pendding Withdrawals</h3>
                    </Col>
                </Row>
                <br />
                <Row>
                    <BootstrapTable
                        keyField="id"
                        data={myLocalData}
                        columns={pendingColumns}
                        striped
                        hover
                        condensed
                        filter={myLocalData.length ? filterFactory() : null}
                    />
                </Row>
                <br />
                <Row>
                    <Col>
                        <h3>Withdrawals History</h3>
                    </Col>
                </Row>
                <br />
                <Row>
                    <BootstrapTable
                        keyField="id"
                        data={this.state.apiData}
                        columns={historyColumns}
                        striped
                        hover
                        condensed
                        pagination={paginationFactory(options)}
                        filter={this.state.apiData.length > 0  ? filterFactory() : null}
                    />
                </Row>
            </div>
        )
    }
}

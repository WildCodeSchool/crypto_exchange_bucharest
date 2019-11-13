import React, { Component, useState } from 'react';
import {
    Row,
    Col,
    Button,
    ButtonToolbar
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
    filter: textFilter(),
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
    filter: textFilter(),
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

export default class Deposits extends Component {
    render() {
        return (
            <div className='Deposits container'>
                <br />
                <Row>
                    <Col>
                        <h3>Pendding Deposits</h3>
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        <Example/>
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
                        filter={filterFactory()}
                    />
                </Row>
                <br />
                <Row>
                    <Col>
                        <h3>Estimated Holdings</h3>
                    </Col>
                </Row>
                <br />
                <Row>
                    <BootstrapTable
                        keyField="id"
                        data={myLocalData}
                        columns={estimatedHolding}
                        striped
                        hover
                        condensed
                        filter={filterFactory()}
                    />
                </Row>
                <br />
                <Row>
                    <Col>
                        <h3>Deposit History</h3>
                    </Col>
                </Row>
                <br />
                <Row>
                    <BootstrapTable
                        keyField="id"
                        data={myLocalData}
                        columns={historyColumns}
                        striped
                        hover
                        condensed
                        pagination={paginationFactory()}
                        filter={filterFactory()}
                    />
                </Row>
            </div>
        )
    }
}

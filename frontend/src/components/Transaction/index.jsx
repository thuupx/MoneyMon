import React, { useEffect, useState } from 'react';
import { FileAddFilled, FileTextFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions, createNewTransaction } from '../../actions/transaction.action';
import { Button, Row, Table, Col } from 'antd';
import columns from './tableColumns';
import CreateTransactionModal from './CreateTransactionModal';
import { exportTransaction } from '../../api';

const Transactions = props => {
    const dispatch = useDispatch()
    const transactionData = useSelector(state => state.transactionsReducer);
    const [visible, setVisible] = useState(false);

    const handleOk = payload => {
        console.log('create transaction with payload', payload);
        dispatch(createNewTransaction(payload));
        setVisible(false);
    }

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch]);
    const dataSource = transactionData.transactions.length > 0
        ? transactionData.transactions.map(transaction => ({ ...transaction, key: transaction.id }))
        : []
    const exportClicks = evt => {
        console.log('export clicked');
        exportTransaction().then(blob => {
            console.log(blob);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a"); // Or maybe get it from the current document
            link.href = url;
            link.download = "transaction.xlsx";
            link.click();
        })
    }
    return (
        <Row justify="center" align='middle' style={{ height: 'calc(100vh - 140px)' }}>
            <Col >
                <h1>Transactions</h1>
                <Button
                    type="primary"
                    icon={<FileAddFilled />}
                    onClick={() => setVisible(true)}
                >Create Transaction</Button>
                <Button icon={<FileTextFilled />} onClick={exportClicks}>Export</Button>
                <CreateTransactionModal visible={visible} loading={transactionData.loading} handleOk={handleOk} handleCancel={setVisible} />
                <Table
                    bordered={true}
                    dataSource={dataSource}
                    columns={columns}
                    tableLayout='auto'
                />
            </Col>


        </Row>
    )
}
export default Transactions;
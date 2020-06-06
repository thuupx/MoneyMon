import React, { useEffect, useState } from 'react';
import { FileAddFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions, createNewTransaction } from '../../actions/transaction.action';
import { Button, Row, Table, Col } from 'antd';
import columns from './tableColumns';
import CreateTransactionModal from './CreateTransactionModal';

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
    }, []);
    const dataSource = transactionData.transactions.length > 0
        ? transactionData.transactions.map(transaction => ({ ...transaction, key: transaction.id }))
        : []

    return (
        <Row justify="center" style={{ 
            height: 'calc(100vh - 140px)' }}>
            <Col >
                <Button
                    type="primary"
                    icon={<FileAddFilled />}
                    onClick={() => setVisible(true)}
                >Create Transaction
                </Button>
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
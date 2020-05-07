import React, { useEffect, useState } from 'react';
import { FileAddFilled, CheckCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions, createNewTransaction } from '../../actions/transaction.action';
import { Button, Row, Table, Col, notification } from 'antd';
import columns from './tableColumns';
import CreateTransactionModal from './CreateTransactionModal';

const Transactions = props => {
    const dispatch = useDispatch()
    const transactionData = useSelector(state => state.transactionsReducer);
    const [visible, setVisible] = useState(false);

    const handleOk = payload => {
        // dispatch() create transaction
        console.log('create transaction with payload', payload);
        dispatch(createNewTransaction(payload));
        notification.open({
            message: 'Created',
            description:
                'Create a new transaction successfully!',
            icon: <CheckCircleOutlined style={{ color: 'green' }} />,
        });
        setVisible(false);
    }

    useEffect(() => {
        dispatch(getTransactions());
    }, []);
    const dataSource = transactionData.transactions.length > 0
        ? transactionData.transactions.map(transaction => ({ ...transaction, key: transaction.id }))
        : []

    return (
        <Row justify="center" align='middle' style={{ height: 'calc(100vh - 139.1px)' }}>
            <Col >
                <h1>Transactions</h1>
                <Button
                    type="primary"
                    icon={<FileAddFilled />}
                    onClick={() => setVisible(true)}
                >Create Transaction</Button>
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
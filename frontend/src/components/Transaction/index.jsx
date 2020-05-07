import React, { useEffect } from 'react';
import { FileAddFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions } from '../../actions/transaction.action';
import { Button, Row, Table, Tag } from 'antd';

const Transactions = props => {
    const dispatch = useDispatch()
    const transactionData = useSelector(state => state.transactionsReducer);

    useEffect(() => {
        dispatch(getTransactions());
    }, []);
    console.log("transactionData", transactionData)
    const transactionex = {
        "id": 44,
        "action": "IN",
        "action_name": "Cộng",
        "category": "Bills & Utilities",
        "from_wallet": "Test Wallet put",
        "name": "Tiền thưởng",
        "amount_currency": "VND",
        "amount": "0.00",
        "created_at": "2020-05-06T11:33:24.219474Z"
    }
    const dataSource = transactionData.transactions.map(transaction => ({ ...transaction, key: transaction.id }))
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text, row) => {
                let color = 'volcano';
                let sign = '-';
                if (row.action === 'IN') {
                    color = 'green';
                    sign = '+';
                }
                return <Tag color={color}>
                    {sign + text.toUpperCase()}
                </Tag>
            }
        },
        {
            title: 'Currency',
            dataIndex: 'amount_currency',
            key: 'amount_currency',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'From Wallet',
            dataIndex: 'from_wallet',
            key: 'from_wallet',
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
        },
    ];

    return (
        <Row justify="center" align='top' style={{ height: 'calc(100vh - 139.1px)' }}>
            <Table dataSource={dataSource} columns={columns} />;
            <Button type="primary" icon={<FileAddFilled />}>Add Transaction</Button>

        </Row>
    )
}
export default Transactions;
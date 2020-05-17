import React from 'react';
import { Tag } from 'antd';
import { formatNumberToMoney } from '../../utils/transaction.util';

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
                {sign + formatNumberToMoney(text)}
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
export default columns;
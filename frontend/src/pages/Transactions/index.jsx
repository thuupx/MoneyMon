import React from 'react';
import Transactions from '../../components/Transaction';
import { Row } from 'antd';

const TransactionsPage = props => {
    return (
        <Row justify="center" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
            <Transactions></Transactions>
        </Row>
    )
}
export default TransactionsPage;
import React from 'react';
import { FileAddFilled } from '@ant-design/icons';
import { Button, Row } from 'antd';

const Transactions = props => {
    return (
        <Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
            <Button type="primary" icon={<FileAddFilled />}>Add Transaction</Button>
        </Row>
    )
}
export default Transactions;
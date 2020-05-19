import React from 'react';
import WalletComponent from '../../components/Wallet';
import { Row } from 'antd';

const WalletPage = props => {
    return (
        <Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
            <WalletComponent></WalletComponent>
        </Row>
    )
}
export default WalletPage;
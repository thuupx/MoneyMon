import React from 'react';
import Sider from '../../components/Sider';
import { Row } from 'antd';
const Dashboard = props => {
    return (
        <Row justify="start" align='top' style={{ height: 'calc(100vh - 146.1px)' }}>
            <Sider />
        </Row>
    )
}
export default Dashboard
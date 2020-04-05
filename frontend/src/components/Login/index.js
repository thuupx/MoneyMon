import React from 'react';
import LoginForm from './LoginForm';
import { Row, Col, Divider } from 'antd';
export const Login = props => {
    return (
        <Row justify="center" align='middle' style={{ height: 'calc(100vh - 133.6px)' }} >
            <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 6 }}>
                <Divider orientation="center">Welcome to MoneyMon!</Divider>
                <hr />
                <LoginForm {...props} />
            </Col>
        </Row>

    )
}
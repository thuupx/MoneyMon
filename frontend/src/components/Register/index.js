import React from 'react';
import RegistrationForm from './RegistrationForm';
import { Row, Col, Divider } from 'antd';
export default function Register(props) {
    return (
        <Row justify="center" align='middle' style={{ height: 'calc(100vh - 133.6px)' }}>
            <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 6 }}>
                <Divider orientation="center">Register and manage your wallet now!</Divider>
                <hr />
                <RegistrationForm />
            </Col>
        </Row>

    )
}
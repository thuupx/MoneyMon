import React from 'react';
import RegistrationForm from './RegistrationForm';
import { Row, Col, Divider } from 'antd';
const rowStyle = {
    height: 'calc(100vh - 146.1px)',
    backgroundImage: 'url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
}
export default function Register(props) {
    return (
        <Row justify="center" align='middle' style={rowStyle}>
            <div style={{
                width: '400px', padding: '40px', position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)', background: 'none', textAlign: 'center',
                borderRadius: '20px', border: '1.5px solid #4caf50', overflow: 'hidden'
            }}>
                <Divider orientation="center" style={{ color: 'white' }}>Register and manage your wallet now!</Divider>
                <hr />
                <RegistrationForm />
            </div>
        </Row>

    )
}
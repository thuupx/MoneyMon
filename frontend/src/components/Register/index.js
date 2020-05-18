import React from 'react';
import RegistrationForm from './RegistrationForm';
import { Row, Divider, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { enquireScreen } from 'enquire-js';

const rowStyle = {
    height: '100vh',
    backgroundImage: 'url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
}
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const divStyle = {
    width: isMobile ? '95%' : '30%', padding: '40px', position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)', background: 'none', textAlign: 'center',
    borderRadius: '20px', border: '1.5px solid #4caf50', overflow: 'hidden'
}
export default function Register(props) {
    const registrationData = useSelector(state => state.registrationReducer);
    if (registrationData.user) return <Redirect to="/login"></Redirect>
    return (
        <Row justify="center" align='middle' style={rowStyle}>
            <div style={divStyle}>
                <Spin spinning={registrationData.registering} tip="Registering...">
                    <Divider orientation="center" style={{ color: 'white' }}>Welcome to MoneyMon!</Divider>
                    <hr />
                    <RegistrationForm {...props} />
                </Spin>
            </div>
        </Row>

    )
}
import React from 'react';
import LoginForm from './LoginForm';
import { Row, Divider, Spin, Alert } from 'antd';
import { withGetScreen } from 'react-getscreen';
import { useSelector } from 'react-redux';
import { enquireScreen } from 'enquire-js';

const rowStyle = {
    height: '100vh',
    backgroundImage: 'url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    overflow: 'hidden'
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
const Login = props => {
    const authData = useSelector(state => state.authReducer);
    return (
        <Row justify="center" align='middle' style={rowStyle}> >
            <div style={divStyle}>
                <Spin spinning={authData.loading} tip="Loading...">
                    {authData.error ? <Alert type="error" message={authData.error} banner closable /> : null}
                    <Divider orientation="center" style={{ color: 'white' }}>Welcome to MoneyMon!</Divider>
                    <hr />
                    <LoginForm {...props} />
                </Spin>
            </div>
        </Row>
    )
}
export default withGetScreen(Login);
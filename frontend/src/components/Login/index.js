import React from 'react';
import LoginForm from './LoginForm';
import { Row, Col, Divider, Spin, Alert } from 'antd';
import { withGetScreen } from 'react-getscreen';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
const style = {
    mobile: {
        border: '1px solid #ccc',
        borderRadius: '20px',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
        padding: '30px 20px 30px 20px',
        background: 'linear-gradient(180deg, rgba(0,9,36,0.7262255243894433) 0%, rgba(9,83,121,0.7458333675266982) 25%, rgba(0,212,255,0.5945728633250176) 100%)'

    },
    tablet: {
        border: '1px solid #ccc',
        borderRadius: '20px',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '30px 20px 30px 20px',
        margin: '0 200px 0 200px',
        background: 'linear-gradient(180deg, rgba(0,9,36,0.7262255243894433) 0%, rgba(9,83,121,0.7458333675266982) 25%, rgba(0,212,255,0.5945728633250176) 100%)'
    },
}
const rowStyle = {
    height: 'calc(100vh - 146.1px)',
    backgroundImage: 'url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'

}
const Login = props => {
    const authData = useSelector(state => state.authReducer);
    console.log(authData);
    
    if (authData.user) {
        return <Redirect to='/' />
    }
    else
        return (
            <Row justify="center" align='middle' style={rowStyle}> >
                <div style={{
                    width: '400px', padding: '40px', position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)', background: 'none', textAlign: 'center',
                    borderRadius: '20px', border: '1.5px solid #4caf50',overflow: 'hidden'
                }}>
                    <Spin spinning={authData.loading} tip="Loading...">
                        {authData.error ? <Alert type="error" message={authData.error.message} banner closable /> : null}
                        <Divider orientation="center" style={{ color: 'white' }}>Welcome to MoneyMon!</Divider>
                        <hr />
                        <LoginForm {...props} />
                    </Spin>
                </div>
            </Row>
        )
}
export default withGetScreen(Login);
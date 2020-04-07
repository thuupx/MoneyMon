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
const Login = props => {
    const authData = useSelector(state => state.authReducer);
    if (authData.user) {
        return <Redirect to='/' />
    }
    else
        return (
            <Spin spinning={authData.loading} tip="Loading...">
                <Row justify="center" align='middle' style={{ height: 'calc(100vh - 146.1px)', backgroundImage:'url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg")'}} >
                    <div style={props.isMobile() ? style.mobile : style.tablet}>
                        <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 6 }}>
                            {authData.error ? <Alert type="error" message={authData.error.message} banner closable /> : null}
                            <Divider orientation="center">Welcome to MoneyMon!</Divider>
                            <hr />
                            <LoginForm {...props} />
                        </Col>
                    </div>
                </Row>
            </Spin>
        )
}
export default withGetScreen(Login);
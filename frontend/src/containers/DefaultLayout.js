import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../routes';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { LoginOutlined, UnlockOutlined, HeartTwoTone } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
export const DefaultLayout = props => (
    <ConnectedRouter history={props.history}>
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
                    <Menu.Item key="3">Discover</Menu.Item>
                    <Menu.SubMenu title="Login" style={{ float: 'right' }}>
                        <Menu.Item style={{ border: '5px' }}><LoginOutlined /><Link to='/login'>Login</Link></Menu.Item>
                        <Menu.Item style={{ border: '5px' }}><UnlockOutlined /><Link to='/register'>Register</Link></Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Header>
            <Content style={{ padding: '64px 50px 0px 50px' }}>
                <div className="content">
                    {routes}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', bottom: "0" }}>
                Make by <b>MoneyMon</b> with <HeartTwoTone twoToneColor="#eb2f96" />
            </Footer>
        </Layout>
    </ConnectedRouter>

)
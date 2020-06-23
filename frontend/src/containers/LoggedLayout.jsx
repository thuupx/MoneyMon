import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import {
    HeartTwoTone, PieChartOutlined,
    ContainerOutlined,
    TransactionOutlined,
    BarChartOutlined,
} from '@ant-design/icons';

import routes from '../routes';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../utils/auth.util';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const logoStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: "148px",
    height: "60px",
    float: "left",
    cursor: 'pointer'
}
const LoggedLayout = props => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const onLogout = () => {
        logout();
        window.location.reload()
    }
    const history = useHistory();
    return (
        <Layout>
            <Header className="header">
                <div className="logo" onClick={() => history.push('/dashboard')} style={logoStyle} >
                    <img width="64px" height="64px" src="https://i.ibb.co/dfx6G33/logo.png" alt="img" />
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">My Account</Menu.Item>
                    <Menu.Item key="2" onClick={() => history.push('/wallet')}>My Wallet</Menu.Item>
                    <Menu.Item key="3" onClick={() => history.push('/category')}>Categories</Menu.Item>
                    <Menu.Item key="4" onClick={() => onLogout()} style={{ float: 'right' }}>Logout</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '1px 0' }}>
                <Layout className="site-layout-background" style={{ padding: '0 0' }}>
                    <Sider collapsible
                        collapsed={collapsed}
                        onCollapse={onCollapse}
                        className="site-layout-background" width={200}
                    >
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <Menu.Item key="1">
                                <TransactionOutlined />
                                <span><Link to="/transaction" style={{ color: 'white' }}>Transactions</Link></span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <PieChartOutlined />
                                <span><Link to="/report" style={{ color: 'white' }}>Reports</Link></span>
                            </Menu.Item>
                            {/* <Divider /> */}
                            <Menu.Item key="3">
                                <ContainerOutlined />
                                <span>Help</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <BarChartOutlined />
                                        <span>Statistic</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="day">Day</Menu.Item>
                                <Menu.Item key="week">Week</Menu.Item>
                                <Menu.Item key="month">Month</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{routes}</Content>
                </Layout>
            </Content>
            <Footer style={footerStyle}><span>
                Make by <b>MoneyMon</b> with <HeartTwoTone twoToneColor="#eb2f96" />
                
            </span>
            <span>A product from <a  rel="noopener noreferrer" href="http://dungtran.top" target="_blank">Dungtran.top</a></span>
            </Footer>
        </Layout>

    )
}
const footerStyle = {
    width: "100%",
    padding: "0 24px",
    lineHeight: "80px",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
}
export default LoggedLayout;
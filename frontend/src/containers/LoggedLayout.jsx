import React, { useState } from 'react';
import { Layout, Menu, Button, Divider } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import {
    HeartTwoTone, PieChartOutlined,
    ContainerOutlined,
    MailOutlined,
    TransactionOutlined,
} from '@ant-design/icons';

import routes from '../routes';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const logoStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: "148px",
    height: "60px",
    // margin: " 16px 28px 16px 0",
    float: "left",
}
const LoggedLayout = props => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
            <Layout>
                <Header className="header">
                    <div className="logo" style={logoStyle} >
                        <img width="64px" height="64px" src="https://i.ibb.co/dfx6G33/logo.png" alt="img" />
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">My Account</Menu.Item>
                        <Menu.Item key="2">My Wallet</Menu.Item>
                        <Menu.Item key="3">Categories</Menu.Item>
                        <Menu.Item key="4" style={{float: 'right'}}>Logout</Menu.Item>
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
                                    <span>Reports</span>
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
                                            <MailOutlined />
                                            <span>Navigation One</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>{routes}</Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}><span>
                    Make by <b>MoneyMon</b> with <HeartTwoTone twoToneColor="#eb2f96" />
                </span></Footer>
            </Layout>

    )
}
export default LoggedLayout;
import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    ContainerOutlined,
    MailOutlined,
    TransactionOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Sider = props => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div style={{ width: 256 }}>
            <Button type="primary" onClick={() => setCollapsed(!collapsed)} >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1">
                    <TransactionOutlined />
                    <Link to="/transaction"> <span>Transactions</span></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <PieChartOutlined />
                    <span>Reports</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <ContainerOutlined />
                    <span>Option 3</span>
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
        </div>
    );
}
export default Sider;
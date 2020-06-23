import React, {Fragment} from 'react';
import Footer from '../Footer'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Avatar, Switch, Dropdown, Button } from 'antd';
import {
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
  HeartTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TransactionOutlined,
  WalletOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu
const { Header, Sider, Content } = Layout;
const FooterDataSource = {
  wrapper: { className: 'footer-wrapper' },
  OverPack: { className: 'footer', playScale: 0.00001 },
  copyright: {
      className: 'copyright',
      children: (
          <span>
              Make by <b>MoneyMon</b> with <HeartTwoTone twoToneColor="#eb2f96" />
               A product from <a  rel="noopener noreferrer" href="http://dungtran.top" target="_blank">Dungtran.top</a>
          </span>
      ),
  },
};

class DashboardDemo extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({collapsed});
  };
  
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };
  
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const dropdown = (
      <Menu
      style={{
        width: '20em',
        boxShadow: '1px 8px 4px 5px rgba(208, 216, 243, 0.6)'
      }}
       >
        <Menu.ItemGroup title="Chọn ví">
          <Menu.Item>1st menu item</Menu.Item>
          <Menu.Item>2nd menu item</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Tính vào tổng">
          <Menu.Item>1st menu item</Menu.Item>
          <Menu.Item>2nd menu item</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
    const {
      avatar,
      username,
    } = this.props
    return (
      <Layout>
        <Sider 
        trigger={null} 
        collapsible 
        collapsed={this.state.collapsed}>
          <Menu 
            style={{
              minHeight: '100vh',
              height: '100%'
            }}
            theme={this.state.theme}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="inline">
                <a href="/">
                  <span>
                    <img src="https://i.ibb.co/dfx6G33/logo.png" alt="logo" className="logo"/>
                  </span>
                </a>     

              <Menu.Item key="Transaction">
                <a href="/transaction">
                  <span>
                      <TransactionOutlined />
                      <span>Transactions</span>
                  </span>
                </a>     
              </Menu.Item>
              <Menu.Item key="Wallet">
                <a href="/wallet">
                  <span>
                      <WalletOutlined />
                      <span>Wallet</span>
                  </span>
                </a>     
              </Menu.Item>
              <Menu.Item key="Category">
                <a href="/category">
                  <span>
                      <AppstoreOutlined />
                      <span>Category</span>
                  </span>
                </a>     
              </Menu.Item>
              <div key="4"
                style={{
                  textAlign: "center",
                }}
              >
                <span>
                  <Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                  />          
                </span>
              </div>      
          </Menu>
        </Sider>
        <Layout 
        className="site-layout"
        >
          <Header
            className="site-layout-background"
          >
            <Button className="dropdown-link" onClick={this.toggle}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Dropdown overlay={dropdown}>
              <Button className="dropdown-link" onClick={e => e.preventDefault()}>
                <DownOutlined />
              </Button>
            </Dropdown>
            <Menu
              style={{float: 'right'}}
              theme="light" mode="horizontal" defaultSelectedKeys={['SignOut']}>
                <SubMenu
                title={
                  <Fragment>
                    <span style={{ color: '#999', marginRight: 4 }}>
                      Hi,
                    </span>
                    <span>{username}username</span>
                    <Avatar style={{ marginLeft: 8 }} src={avatar} />
                  </Fragment>
                }>
                  <Menu.Item key="UserSetting">
                    <a href="/test"> <SettingOutlined/> Settings</a>
                  </Menu.Item>
                  <Menu.Item key="SignOut">
                    <p> <LogoutOutlined/> Sign out </p>
                  </Menu.Item>
                </SubMenu>       
            </Menu> 
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24
            }}
          >
            {this.props.children}
          </Content>
          <Footer
            id="Footer_1"
            key="Footer_1"
            dataSource={{ ...FooterDataSource }}
          />
        </Layout>
      </Layout>
    );
  }
}

export default DashboardDemo;
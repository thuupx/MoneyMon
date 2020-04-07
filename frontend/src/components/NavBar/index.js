import React from 'react';
import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined, UnlockOutlined } from '@ant-design/icons';

const Item = Menu.Item;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: false,
            menuHeight: 0,
        };
    }

    phoneClick = () => {
        const menu = findDOMNode(this.menu);
        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,
            menuHeight: phoneOpen ? menu.scrollHeight : 0,
        });
    };

    render() {
        const { ...props } = this.props;
        const { dataSource, isMobile } = props;
        delete props.dataSource;
        delete props.isMobile;
        const { menuHeight, phoneOpen } = this.state;
        return (
            <TweenOne
                component="header"
                animation={{ opacity: 0, type: 'from' }}
                {...dataSource.wrapper}
                {...props}
            >
                <div
                    {...dataSource.page}
                    className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
                >
                    <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        {...dataSource.logo}
                    >
                        <img width="64px" height="64px" src={dataSource.logo.children} alt="img" />
                    </TweenOne>
                    {isMobile && (
                        <div
                            {...dataSource.mobileMenu}
                            onClick={() => {
                                this.phoneClick();
                            }}
                        >
                            <em />
                            <em />
                            <em />
                        </div>
                    )}
                    <TweenOne
                        {...dataSource.Menu}
                        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
                        ref={(c) => {
                            this.menu = c;
                        }}
                        style={isMobile ? { height: menuHeight } : null}
                    >
                        <Menu
                            mode={isMobile ? 'inline' : 'horizontal'}
                            defaultSelectedKeys={['0']}
                            theme={isMobile ? 'dark' : 'light'}
                        >
                            <Item key="1"><Link to='/' style={{ color: 'white' }}>Home</Link></Item>
                            <Item key="2"><Link to='/about' style={{ color: 'white' }}>About</Link></Item>
                            <Menu.SubMenu title="Login" style={{ float: 'right' }}>
                                <Item style={{ border: '5px' }}><LoginOutlined /><Link to='/login'>Login</Link></Item>
                                <Item style={{ border: '5px' }}><UnlockOutlined /><Link to='/register'>Register</Link></Item>
                            </Menu.SubMenu>
                        </Menu>
                    </TweenOne>
                </div>
            </TweenOne>
        );
    }
}

export default Header;

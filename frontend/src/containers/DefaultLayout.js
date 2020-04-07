import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../routes';
import { Layout } from 'antd';
import {HeartTwoTone } from '@ant-design/icons';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { withGetScreen } from 'react-getscreen';
const { Content } = Layout;
const NavDataSource = {
    wrapper: { className: 'header home-page-wrapper' },
    page: { className: 'home-page' },
    logo: {
        className: 'header-logo',
        children: 'https://i.ibb.co/dfx6G33/logo.png',
    },
    Menu: {
        className: 'header-menu',
    },
    mobileMenu: { className: 'header-mobile-menu' },
};
const FooterDataSource = {
    wrapper: { className: 'home-page-wrapper footer-wrapper' },
    OverPack: { className: 'home-page footer', playScale: 0.05 },
    copyright: {
        className: 'copyright',
        children: (
            <span>
                Make by <b>MoneyMon</b> with <HeartTwoTone twoToneColor="#eb2f96" />
            </span>
        ),
    },
};

const DefaultLayout = props => {
    const isMobile = props.isMobile();
    return (
        <ConnectedRouter history={props.history}>
            <Layout>
                <NavBar
                    id="Nav0_0"
                    key="Nav0_0"
                    dataSource={{ ...NavDataSource }}
                    isMobile={isMobile}
                />
                <Content>
                    <div className="content">
                        {routes}
                    </div>
                </Content>
                <Footer
                    id="Footer_0"
                    key="Footer_0"
                    dataSource={{ ...FooterDataSource }}
                    isMobile={isMobile}
                />
            </Layout>
        </ConnectedRouter>
    )
}
export default withGetScreen(DefaultLayout);
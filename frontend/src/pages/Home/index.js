import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner0 from '../../components/Banner';
import Content0 from '../../components/Contents/Content0';
import Content7 from '../../components/Contents/Content7';
import Content13 from '../../components/Contents/Content13';
import {
    BannerDataSource,
    ContentDataSource,
    Content70DataSource,
    Content130DataSource,
} from './data.source.js';

import '../../less/main.less';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const location = window.location;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
        };
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
        if (location.port) {
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
    }

    render() {
        const children = [
            <Banner0
                id="Banner0_0"
                key="Banner0_0"
                dataSource={BannerDataSource}
                isMobile={this.state.isMobile}
            />,
            <Content0
                id="Content0_0"
                key="Content0_0"
                dataSource={ContentDataSource}
                isMobile={this.state.isMobile}
            />,
            <Content7
                id="Content7_0"
                key="Content7_0"
                dataSource={Content70DataSource}
                isMobile={this.state.isMobile}
            />,
            <Content13
                id="Content13_0"
                key="Content13_0"
                dataSource={Content130DataSource}
                isMobile={this.state.isMobile}
            />
        ];
        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                {this.state.show && children}
            </div>
        );
    }
}

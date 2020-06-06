import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../routes';
import { Layout } from 'antd';
import DashboardDemo from '../components/Dashboard';
import { withGetScreen } from 'react-getscreen';

const DashboardLayout = props => {
    return (
        <ConnectedRouter history={props.history}>
            <Layout>
                <DashboardDemo>
                    {routes}
                </DashboardDemo>
            </Layout>
        </ConnectedRouter>
    )
}
export default withGetScreen(DashboardLayout);
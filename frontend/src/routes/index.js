import React from 'react';
import Home from '../pages/Home';
import { Switch } from 'react-router';
import Login from '../components/Login';
import App from '../App';
import Register from '../components/Register';
import DashboardPage from '../pages/Dashboard';
import Transactions from '../components/Transaction';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import CategoryPage from '../pages/Categories';
import WalletPage from '../pages/Wallet';
import ReportPage from '../pages/Report';
const routes = (
    <Switch>
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute path="/about" component={App} />
        <PublicRoute restricted={true} path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/transaction" component={Transactions} />
        <PrivateRoute path="/category" component={CategoryPage} />
        <PrivateRoute path="/wallet" component={WalletPage} />
        <PrivateRoute path="/report" component={ReportPage} />
    </Switch>
)
export default routes;
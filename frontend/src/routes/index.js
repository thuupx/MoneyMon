import React from 'react';
import Home from '../pages/Home';
import { Switch } from 'react-router';
import Login from '../components/Login';
import App from '../App';
import Register from '../components/Register';
import Dashboard from '../pages/Dashboard';
import Transactions from '../components/Transaction';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const routes = (
    <Switch>
        <PublicRoute component={Home} path="/" exact />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute path="/about" component={App} />
        <PublicRoute restricted={true} path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/transaction" component={Transactions} />
    </Switch>
)
export default routes;
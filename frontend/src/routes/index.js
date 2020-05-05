import React from 'react';
import Home from '../pages/Home';
import { Switch, Route } from 'react-router';
import Login from '../components/Login';
import App from '../App';
import Register from '../components/Register';
import Dashboard from '../pages/Dashboard';
import Transactions from '../components/Transaction';
const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/transaction" component={Transactions} />
    </Switch>
)
export default routes;
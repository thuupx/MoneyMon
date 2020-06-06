import React from 'react';
import { Switch, Route } from 'react-router';
import Tests from '../components/Test'
import CategoryPage from '../pages/Categories'
import WalletPage from '../pages/Wallet'
import Transactions from '../pages/Transactions'
import Dashboard from '../pages/Dashboard';


const routes = (
    <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Tests} path="/test" />
        <Route component={WalletPage} path="/wallet" />
        <Route component={Transactions} path="/transaction" />
        <Route component={CategoryPage} path="/category" />
    </Switch>
)
export default routes;
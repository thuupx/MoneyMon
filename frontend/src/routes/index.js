import React from 'react';
import Home from '../components/Home';
import { Switch, Route } from 'react-router';
import Login from '../components/Login';
import App from '../App';
import Register from '../components/Register';
const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={App} />
        <Route path="/register" component={Register} />
    </Switch>
)
export default routes;
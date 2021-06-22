import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index/index'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Main from './pages/Main'
import Course from './pages/Course'

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/course" component={Course} />
        </Switch>
        </BrowserRouter>
    );
}
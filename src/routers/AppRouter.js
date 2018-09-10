import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './../components/Dashboard';
import CreateExpense from './../components/CreateExpense';
import EditExpense from './../components/EditExpense';
import NotFound from './../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={CreateExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

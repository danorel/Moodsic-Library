import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import '../public/stylesheets/App.css';

import Landing from '../components/Landing';

import store, { history } from '../store';

export default function Main() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={Landing} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

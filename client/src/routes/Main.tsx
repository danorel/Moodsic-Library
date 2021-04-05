import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import '../public/stylesheets/App.css';
require('typeface-montserrat');

import LandingView from '../components/Landing';
import AuthenticationView from '../components/Authentication/index';

import store, { history } from '../store';

export default function Main() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LandingView} />
                        <Route path="/authentication" component={AuthenticationView} />
                    </Switch>
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    );
}

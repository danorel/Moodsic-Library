import React from 'react';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

require('typeface-montserrat');

import LandingView from '../features/landing/components/Landing';
import AuthenticationView from '../features/user/components';

import store, { history } from '../store';
import { getPath } from '../routing';

export default function Main() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={getPath('home')} component={LandingView} />
                        <Route path={getPath('authentication')} component={AuthenticationView} />
                    </Switch>
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    );
}

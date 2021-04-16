import React from 'react';
import { Switch, Route } from 'react-router';

import LandingView from '../features/landing/components/Landing';
import AuthenticationView from '../features/user/components';

import { getPath } from '../routing';

export default function Main() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={getPath('home')} component={LandingView} />
                {/*<Route path={getPath('authentication')} component={AuthenticationView} />*/}
            </Switch>
        </React.Fragment>
    );
}

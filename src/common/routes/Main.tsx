import React from 'react';
import { Switch, Route } from 'react-router';

import Router from './Router';

import { RouteType } from './Router';

const Main = () => {
    return (
        <React.Fragment>
            <Switch>
                {Router.map((route: RouteType, index: number) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                ))}
            </Switch>
        </React.Fragment>
    );
};

export default Main;

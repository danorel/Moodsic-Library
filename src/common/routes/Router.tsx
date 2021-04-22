import React from 'react';
import { getPath } from '../routing';

import LandingView from '../features/landing/components/Landing';
import AuthenticationView from '../features/user/components';

export type RouteType = {
    component: React.ComponentType;
    path: string;
    exact: boolean;
};

const Paths: RouteType[] = [
    {
        component: LandingView,
        path: getPath('home'),
        exact: true,
    },
    {
        component: AuthenticationView,
        path: getPath('authentication'),
        exact: false,
    },
];

export default Paths;

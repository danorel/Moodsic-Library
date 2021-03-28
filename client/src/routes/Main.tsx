import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import '../public/stylesheets/App.css';

import Landing from '../modules/landing/Landing';

export default function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}
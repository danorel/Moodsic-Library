import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import '../public/stylesheets/App.css';

import Landing from '../modules/landing/Landing';

export default function Main() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Express from 'express';

import Main from 'common/routes/Main';

export default (req: Express.Request, store: any, context: any) => {
    const sheets = new ServerStyleSheets();

    // Creating the string, holding the application.
    const template = ReactDOM.renderToString(
        sheets.collect(
            <ReduxProvider store={store}>
                <StaticRouter location={req.path} context={context}>
                    <Main />
                </StaticRouter>
            </ReduxProvider>
        )
    );

    // Loading css from Material UI.
    const css = sheets.toString();

    // Setting up the initial state of the app.
    const initialState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

    return render(template, initialState, css);
};

const render = (template: string, initialState: string, css: string) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Listen music with emotions" />
            <link rel="stylesheet" href="stylesheets/main.css"/>
            <style id="jss-server-side">${css}</style>
            <title>Moodsic</title>
        </head>
        <body>
             <main id="root">${template.toString()}</main>
             <script>
                 window["__PRELOADED_STATE__"] = ${initialState}
             </script>
             <script src="main.js"></script>
             <script src="server.js"></script>
        </body>
    </html>
`;

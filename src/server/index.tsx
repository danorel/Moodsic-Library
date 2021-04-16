import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import Express from 'express';

import Main from '../common/routes/Main';
import store from '../common/store';

declare const module: any;

function main() {
    const app = Express();

    app.use(Express.static('build'));

    app.get('/*', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        const appHTML = ReactDOM.renderToString(
            <ReduxProvider store={store}>
                <Router location={req.path} context={{}}>
                    <Main />
                </Router>
            </ReduxProvider>
        );

        const appInitialState = JSON.stringify(store.getState()).replace(
            /</g,
            "\\u003c"
        );

        res.send(indexHTML(appHTML, appInitialState))
        res.end();
        next();
    });

    const server = app.listen(5000, () => console.log('Listening to the server onn port 5000.'));

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

const indexHTML = (template: string, initialState: string) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Listen music with emotions" />
            <title>Moodsic</title>
        </head>
        <body>
             <main id="root">${template}</main>
             <script>
                 window["__PRELOADED_STATE__"] = ${initialState}
             </script>
             <script type="application/javascript" src="bundle.js"></script>
        </body>
    </html>
`

main();

import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
// import { SheetsRegistry } from "react-jss";
// import { JssProvider } from "react-jss";

import Express from 'express';
import Path from 'path';
import FS from 'fs';

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

        FS.readFile(Path.resolve('build', 'index.html'), 'utf-8', (err, data) => {
            if (err) return next(err);
            return res.send(data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`));
        });

        next();
    });

    const server = app.listen(3000, () => console.log('Listening to the server onn port 3000.'));

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();

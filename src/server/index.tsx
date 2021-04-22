import Express from 'express';

import Renderer from 'server/renderer';

import store from 'common/store/index';

declare const module: any;

function main() {
    const app = Express();

    app.use(Express.static('./build'));

    app.get('/*', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        const context = {};
        const content = Renderer(req, store, context);
        res.contentType('text/html');
        res.status(200);
        res.send(content);
        res.end();
        next();
    });

    const server = app.listen(5000, () => console.log('Listening to the server on port 5000.'));

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();

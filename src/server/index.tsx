import Express from 'express';

import Renderer from 'server/renderer';

import store from 'common/store/index';

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

export { app };

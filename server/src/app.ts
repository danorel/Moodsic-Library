import express, { Application, Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as fs from 'fs';

import ReactDOMServer from 'react-dom/server';

import Main from '../../client/src/routes/Main';

const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('^/$', (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(path.resolve('..', '..', 'build', 'client', 'dist', 'index.html'), 'utf-8', (err, data) => {
        if (err) return next(err);
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<Main />)}</div>`));
    });
});

// catch 404 and forward to error handler
// @ts-ignore
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// error handler
// @ts-ignore
app.use((err: HttpError, req: Response, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    next();
});

app.use(experss.static(path.resolve(__pathname, '..', '..', 'client', 'public', 'index.html')));

app.listen(3000, () => console.log('Listening to the server onn port 3000.'));

module.exports = app;

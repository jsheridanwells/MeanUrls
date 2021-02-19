import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Express } from 'express';
import { routerIndex } from './routes/index';

export default function createApp(): Express {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/api', routerIndex());
    app.use((req, res) => res.status(404).send('not found :('));
    return app;
}

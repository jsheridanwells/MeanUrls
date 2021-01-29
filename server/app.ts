import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { Express } from 'express';
import { routerIndex } from './routes/index';

export default function createApp(): Express {
    const app = express();
    const clientDir = path.join(__dirname, '../public');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/api', routerIndex());
    app.get('*', express.static(clientDir));
    app.use((req, res) => res.status(404).send('not found :('));
    return app;
}

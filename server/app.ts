import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { Express, Request, Response } from 'express';
import { routerIndex } from './routes/index';

export default function createApp(): Express {
    const app = express();
    const clientDir = path.join(__dirname, '../public');
    app.use(express.static(clientDir));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/api', routerIndex());
    app.get('/api/:name', async (req: Request, res: Response) => {
        const name = req.params.name;
        const greeting = { greeting: `Hello, ${ name }` };
        res.send(greeting);
    });
    return app;
}

import * as express from 'express';
import * as path from 'path';
import { Express, Request, Response } from 'express';

export default function createApp(): Express {
    const app = express();
    const clientDir = path.join(__dirname, '../public');
    app.use(express.static(clientDir));
    app.get('/api/:name', async (req: Request, res: Response) => {
        const name = req.params.name;
        const greeting = { greeting: `Hello, ${ name }` };
        res.send(greeting);
    });
    return app;
}

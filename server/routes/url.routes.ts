import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Url, getAllUrls, getUrlByCode, addUrl } from '../services/url.service';

export function urlRoutes(): Router {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    const urls = getAllUrls();
    res.send(urls);
  });

  router.get('/:code', async (req: Request, res: Response) => {
    const code = req.params.code
    const url = getUrlByCode(code);
    res.send(url);
  });

  router.post('/', async (req: Request, res: Response) => {
    const newUrl: Url = { location: req.body.location };
    const url = addUrl(newUrl);
    res.status(201).send(url);
  });

  return router;
}

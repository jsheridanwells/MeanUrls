import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Url, getAllUrls, getUrlByCode, addUrl } from '../services/url.service';

export function urlRoutes(): Router {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const urls = await getAllUrls();
      res.send(urls);
    } catch(err) {
      console.error(err);
      res.status(500).send('Could not complete request');
    }
  });

  router.get('/:code', async (req: Request, res: Response) => {
    try {
      const code = req.params.code
      const url = await getUrlByCode(code);
      res.send(url);
    } catch (err) {
      console.error(err);
      res.status(500).send('Could not complete request');
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    try {
      const newUrl: Url = { location: req.body.location };
      const url = await addUrl(newUrl);
      res.status(201).send(url);
    } catch (err) {
      console.error(err);
      res.status(500).send('Could not complete request');
    }
  });

  return router;
}

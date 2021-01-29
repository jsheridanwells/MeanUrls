import * as express from 'express';
import { Router } from 'express';
import { urlRoutes } from './url.routes';

export function routerIndex(): Router {
  const router = express.Router();
  router.use('/urls', urlRoutes());
  router.use((req, res) => res.status(404).send('not found :('));
  return router;
}

import * as express from 'express';
import { Router } from 'express';
import { urlRoutes } from './url.routes';

export function routerIndex(): Router {
  const router = express.Router();
  router.use('/urls', urlRoutes());
  return router;
}

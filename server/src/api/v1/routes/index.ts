import express from 'express';
import companyRoutes from './company.routes';

const routes = express.Router();

routes.use('/', companyRoutes);

export default routes;
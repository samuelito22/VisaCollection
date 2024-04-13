import express from 'express';
import { getCompanies } from '../controllers/company.controllers';

const routes = express.Router();

routes.get('/companies', getCompanies);

export default routes;
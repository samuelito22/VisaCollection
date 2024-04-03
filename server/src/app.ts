import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import v1Routes from "@/api/v1/routes"
import cors from "cors"
import { errorHandler } from './api/v1/middlewares';

const app: Express = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS setup or other common middleware
app.use(cors());

app.use(errorHandler);

// Register routes
app.use('/api/v1', v1Routes);

// Catch-all route for unhandled requests
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('API endpoint not found');
});

export default app;

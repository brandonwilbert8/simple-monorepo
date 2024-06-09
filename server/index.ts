import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Welcome to this Express + Typescript Server!');
});

app.get('/users', (req: Request, res: Response) => {
  res.status(200).json({ users: ['userOne', 'userTwo', 'userThree'] });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port} 🚀`);
});

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json('Welcome to this Express + Typescript Server!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port} 🚀`);
});

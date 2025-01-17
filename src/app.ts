import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// console.log(process.cwd());

export default app;

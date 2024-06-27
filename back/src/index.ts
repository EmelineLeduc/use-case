import express, { Request, Response, NextFunction } from 'express';
import { missionsRouter } from './routes/missions';

const app = express();
const port = 8080;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/missions', missionsRouter);

app.listen(port, () => console.info(`Server is running on port ${port}`));

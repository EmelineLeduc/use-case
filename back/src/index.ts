import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, NextFunction } from 'express';
import { missionsRouter } from './routes/missions';
// import { missionsAirtableRouter } from './routes/missionsFromAirtable'; // Uncomment to use data from an Airtable table

const app = express();
const port = 8080;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/missions', missionsRouter);
// app.use('/missions', missionsAirtableRouter); // Uncomment to use data from an Airtable table

app.listen(port, () => console.info(`Server is running on port ${port}`));

export default app;

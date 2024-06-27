import { Router } from 'express';
import { getMissions } from '../services/missionsService';
import { Mission } from '../types';

export const missionsRouter = Router();

missionsRouter.get('/', (req, res) => {
  const missions: Mission[] = getMissions();
  res.send(missions);
});

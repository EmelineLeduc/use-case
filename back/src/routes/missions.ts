import { Router } from 'express';
import { getMissions } from '../services/missionsService';
import { Mission } from '../types';
import { orderMissions } from '../utils/orderMissions';

export const missionsRouter = Router();

missionsRouter.get('/', (req, res) => {
  try {
    const missions: Mission[] = getMissions();
    if (missions.length === 0) {
      res.status(404).send({ error: 'No missions found.' });
    }
    const orderedMissionsByStartDate = orderMissions(missions, 'beginDate');
    const orderedMissionsByEndDate = orderMissions(missions, 'endDate');
    res.status(200).send({
      arrivingBloomers: orderedMissionsByStartDate,
      leavingBloomers: orderedMissionsByEndDate,
    });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

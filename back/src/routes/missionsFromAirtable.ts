import { Router, Request, Response } from 'express';
import Airtable from 'airtable';
import { Mission, Freelance } from '../types';
import { orderMissions } from '../utils/orderMissions';

export const missionsAirtableRouter = Router();

export const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID || '');

export const getFreelanceDetails = async (freelanceId: string) => {
  try {
    const freelanceRecord = await base('Freelance').find(freelanceId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { Missions, ...freelanceDetailsWithoutMissions } =
      freelanceRecord.fields;
    return freelanceDetailsWithoutMissions;
  } catch (err) {
    console.error(err);
    return {};
  }
};

missionsAirtableRouter.get('/', async (req: Request, res: Response) => {
  try {
    const missions = await base('Missions').select().firstPage();
    const allRecords = await Promise.all(
      missions.map(async (record) => {
        const missionRecord = {
          ...record.fields,
        } as unknown as Mission;
        const freelanceId = (record.fields.freelance as string[])[0] as string;
        if (freelanceId) {
          missionRecord.freelance = (await getFreelanceDetails(
            freelanceId
          )) as unknown as Freelance;
        }
        return missionRecord;
      })
    );
    const orderedMissionsByStartDate = orderMissions(allRecords, 'beginDate');
    const orderedMissionsByEndDate = orderMissions(allRecords, 'endDate');
    res.status(200).send({
      arrivingBloomers: orderedMissionsByStartDate,
      leavingBloomers: orderedMissionsByEndDate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des données');
  }
});

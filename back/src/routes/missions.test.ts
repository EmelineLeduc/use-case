import request from 'supertest';
import app from '../index';
import { getMissions } from '../services/missionsService';
import { orderMissions } from '../utils/orderMissions';
import { Mission, MissionByDate } from '../types';

jest.mock('../services/missionsService', () => ({
  getMissions: jest.fn(),
}));
jest.mock('../utils/orderMissions.ts', () => ({
  orderMissions: jest.fn(),
}));
const mockGetMissions = getMissions as jest.Mock;
const mockOrderMissions = orderMissions as jest.Mock;

describe('GET /missions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return an object listing arriving and leaving missions', async () => {
    const missions: Mission[] = [
      {
        id: '1',
        label: "Développement d'une application mobile",
        beginDate: '2024-07-08',
        endDate: '2024-07-29',
        missionType: 'Développement',
        freelance: {
          id: 'f1',
          firstname: 'Alexandre',
          lastname: 'Durand',
          email: 'alexande.durand@example.com',
        },
      },
    ];
    const arrivingBloomers: MissionByDate = {
      '2024-07-08': [
        {
          firstname: 'Alexandre',
          lastname: 'Durand',
          beginMission: '2024-07-08',
          endMission: '2024-07-29',
          id: '1',
        },
      ],
    };

    const leavingBloomers: MissionByDate = {
      '2024-07-29': [
        {
          firstname: 'Alexandre',
          lastname: 'Durand',
          beginMission: '2024-07-08',
          endMission: '2024-07-29',
          id: '1',
        },
      ],
    };
    mockGetMissions.mockReturnValue(missions);
    mockOrderMissions.mockImplementation((missions, key) => {
      if (key === 'beginDate') {
        return arrivingBloomers;
      } else if (key === 'endDate') {
        return leavingBloomers;
      }
    });

    const response = await request(app).get('/missions');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('arrivingBloomers');
    expect(response.body).toHaveProperty('leavingBloomers');
    expect(mockGetMissions).toHaveBeenCalled();
    expect(mockOrderMissions).toHaveBeenCalledTimes(2);
    expect(mockOrderMissions).toHaveBeenCalledWith(missions, 'beginDate');
    expect(mockOrderMissions).toHaveBeenCalledWith(missions, 'endDate');
    expect(response.body).toEqual({
      arrivingBloomers,
      leavingBloomers,
    });
  });

  it('should return a 404 error when no missions are found', async () => {
    mockGetMissions.mockReturnValue([]);
    const response = await request(app).get('/missions');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'No missions found.' });
  });

  it('should throw an error when fetching missions fails', async () => {
    mockGetMissions.mockImplementation(() => {
      throw new Error('Error occurred.');
    });
    const response = await request(app).get('/missions');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: 'Internal Server Error',
    });
  });
});

import request from 'supertest';
import app from '../index';
import { getMissions } from '../services/missionsService';
import { Mission } from '../types';

function getMockMissions(): Mission[] {
  return [
    {
      id: '1',
      label: "Développement d'une application mobile",
      beginDate: '2024-01-01',
      endDate: '2024-09_01',
      missionType: 'Développement',
      freelance: {
        id: 'f1',
        firstname: 'Alexandre',
        lastname: 'Durand',
        email: 'alexande.durand@example.com',
      },
    },
  ];
}

jest.mock('../services/missionsService', () => ({
  getMissions: jest.fn(),
}));

const mockGetMissions = getMissions as jest.Mock;

describe('GET /missions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return an array of missions', async () => {
    mockGetMissions.mockReturnValue(getMockMissions());
    const response = await request(app).get('/missions');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(getMockMissions());
  });

  it('should throw an error when fetching missions fails', async () => {
    mockGetMissions.mockReturnValue(() => {
      throw new Error('Boom!');
    });
    const response = await request(app).get('/missions');
    expect(response.status).toBe(500);
  });
});

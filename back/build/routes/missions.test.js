'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const supertest_1 = __importDefault(require('supertest'));
const index_1 = __importDefault(require('../index'));
const missionsService_1 = require('../services/missionsService');
function getMockMissions() {
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
const mockGetMissions = missionsService_1.getMissions;
describe('GET /missions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should return an array of missions', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockGetMissions.mockReturnValue(getMockMissions());
      const response = yield (0, supertest_1.default)(index_1.default).get(
        '/missions'
      );
      expect(response.status).toBe(200);
      expect(response.body.arriving).toEqual(getMockMissions());
    }));
  it('should return a 404 error when no missions are found', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockGetMissions.mockReturnValue([]);
      const response = yield (0, supertest_1.default)(index_1.default).get(
        '/missions'
      );
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'No missions found.' });
    }));
  it('should throw an error when fetching missions fails', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockGetMissions.mockImplementation(() => {
        throw new Error('Error occurred.');
      });
      const response = yield (0, supertest_1.default)(index_1.default).get(
        '/missions'
      );
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        error: 'Internal Server Error',
      });
    }));
});

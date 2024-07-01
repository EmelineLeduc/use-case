'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const sortMissions_1 = require('./sortMissions');
const missionsService_1 = require('../services/missionsService');
describe('sortMissions', () => {
  it('should return an array of mission start dates', () => {
    const expectedBeginDates = {
      '2024-07-12': [
        {
          firstname: 'Michel',
          lastname: 'Cacahuete',
          beginMission: '2024-07-12',
          endMission: '2024-07-30',
          id: '3',
        },
      ],
      '2024-07-08': [
        {
          firstname: 'Alexandre',
          lastname: 'Durand',
          beginMission: '2024-07-08',
          endMission: '2024-07-29',
          id: '1',
        },
        {
          firstname: 'Marie',
          lastname: 'Durand',
          beginMission: '2024-07-08',
          endMission: '2024-07-30',
          id: '2',
        },
      ],
      '2025-07-12': [
        {
          firstname: 'Sandy',
          lastname: 'Courgette',
          beginMission: '2025-07-12',
          endMission: '2025-08-12',
          id: '4',
        },
      ],
    };
    const missions = (0, missionsService_1.getMissions)();
    const dateTypeMission = 'beginDate';
    const sortedMissionsByStartDate = (0, sortMissions_1.orderMissions)(
      missions,
      dateTypeMission
    );
    expect(sortedMissionsByStartDate).toEqual(expectedBeginDates);
  });
  it('should return an array of mission end dates', () => {
    const expectedBeginDates = {
      '2024-07-29': [
        {
          firstname: 'Alexandre',
          lastname: 'Durand',
          beginMission: '2024-07-08',
          endMission: '2024-07-29',
          id: '1',
        },
      ],
      '2024-07-30': [
        {
          firstname: 'Marie',
          lastname: 'Durand',
          beginMission: '2024-07-08',
          endMission: '2024-07-30',
          id: '2',
        },
        {
          firstname: 'Michel',
          lastname: 'Cacahuete',
          beginMission: '2024-07-12',
          endMission: '2024-07-30',
          id: '3',
        },
      ],
      '2025-08-12': [
        {
          firstname: 'Sandy',
          lastname: 'Courgette',
          beginMission: '2025-07-12',
          endMission: '2025-08-12',
          id: '4',
        },
      ],
    };
    const missions = (0, missionsService_1.getMissions)();
    const dateTypeMission = 'endDate';
    const sortedMissionsByEndDate = (0, sortMissions_1.orderMissions)(
      missions,
      dateTypeMission
    );
    expect(sortedMissionsByEndDate).toEqual(expectedBeginDates);
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    console.log(date);
  });
  //   it('should sort the array of missions by start date', () => {
  //     const expectedBeginDates = [
  //       {
  //         id: '3',
  //         label: "Développement d'une application web",
  //         beginDate: '2020-09-18',
  //         endDate: '2021-09-18',
  //         missionType: 'Développement',
  //         freelance: {
  //           id: 'f3',
  //           firstname: 'Michel',
  //           lastname: 'Cacahuete',
  //           email: 'michel.cacahuete@example.com',
  //         },
  //       },
  //       {
  //         id: '4',
  //         label: 'Audit',
  //         beginDate: '2020-09-18',
  //         endDate: '2021-09-18',
  //         missionType: 'Audit',
  //         freelance: {
  //           id: 'f4',
  //           firstname: 'Sandy',
  //           lastname: 'Courgette',
  //           email: 'sandy.courgette@example.com',
  //         },
  //       },
  //       {
  //         id: '2',
  //         label: 'Audit de sécurité informatique',
  //         beginDate: '2023-02-15',
  //         endDate: '2024-09-01',
  //         missionType: 'Audit',
  //         freelance: {
  //           id: 'f2',
  //           firstname: 'Marie',
  //           lastname: 'Durand',
  //           email: 'marie.durand@example.com',
  //         },
  //       },
  //       {
  //         id: '1',
  //         label: "Développement d'une application mobile",
  //         beginDate: '2024-01-01',
  //         endDate: '2024-09-01',
  //         missionType: 'Développement',
  //         freelance: {
  //           id: 'f1',
  //           firstname: 'Alexandre',
  //           lastname: 'Durand',
  //           email: 'alexande.durand@example.com',
  //         },
  //       },
  //       {
  //         id: '5',
  //         label: 'Développement mobile',
  //         beginDate: '2024-01-01',
  //         endDate: '2025-10-18',
  //         missionType: 'Développement',
  //         freelance: {
  //           id: 'f6',
  //           firstname: 'Marc',
  //           lastname: 'Decafé',
  //           email: 'marc.decafe@example.com',
  //         },
  //       },
  //     ];
  //     const missions: Mission[] = getMissions();
  //     const dateTypeMission = 'beginDate';
  //     const sortedMissionsByStartDate = sortMissionsByDate(
  //       missions,
  //       dateTypeMission
  //     );
  //     expect(sortedMissionsByStartDate).toEqual(expectedBeginDates);
  //   });
});

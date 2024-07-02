"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderMissions_1 = require("./orderMissions");
const missionsService_1 = require("../services/missionsService");
const expectedOrderedMissionsByBeginDates = {
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
const expectedOrderedMissionsByEndDates = {
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
describe('sortMissions', () => {
    it('should return an array of mission start dates', () => {
        const missions = (0, missionsService_1.getMissions)();
        const dateTypeMission = 'beginDate';
        const sortedMissionsByStartDate = (0, orderMissions_1.orderMissions)(missions, dateTypeMission);
        expect(sortedMissionsByStartDate).toEqual(expectedOrderedMissionsByBeginDates);
    });
    it('should return an array of mission end dates', () => {
        const missions = (0, missionsService_1.getMissions)();
        const dateTypeMission = 'endDate';
        const sortedMissionsByEndDate = (0, orderMissions_1.orderMissions)(missions, dateTypeMission);
        expect(sortedMissionsByEndDate).toEqual(expectedOrderedMissionsByEndDates);
        const today = new Date();
        const date = new Date(today.getFullYear(), today.getMonth() + 2, 0);
        console.log(date);
    });
    it('should group missions by beginDate', () => {
        const missions = (0, missionsService_1.getMissions)();
        const dateTypeMission = 'beginDate';
        const result = (0, orderMissions_1.groupMissionsByDate)(missions, dateTypeMission);
        expect(result).toEqual(expectedOrderedMissionsByBeginDates);
    });
    it('should correctly sort missions by beginDate in ascending order', () => {
        const missions = (0, missionsService_1.getMissions)();
        const dateTypeMission = 'beginDate';
        const expectedSortMissionsByDate = [
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
            {
                id: '2',
                label: 'Audit de sécurité informatique',
                beginDate: '2024-07-08',
                endDate: '2024-07-30',
                missionType: 'Audit',
                freelance: {
                    id: 'f2',
                    firstname: 'Marie',
                    lastname: 'Durand',
                    email: 'marie.durand@example.com',
                },
            },
            {
                id: '3',
                label: "Développement d'une application web",
                beginDate: '2024-07-12',
                endDate: '2024-07-30',
                missionType: 'Développement',
                freelance: {
                    id: 'f3',
                    firstname: 'Michel',
                    lastname: 'Cacahuete',
                    email: 'michel.cacahuete@example.com',
                },
            },
            {
                id: '4',
                label: 'Audit',
                beginDate: '2025-07-12',
                endDate: '2025-08-12',
                missionType: 'Audit',
                freelance: {
                    id: 'f4',
                    firstname: 'Sandy',
                    lastname: 'Courgette',
                    email: 'sandy.courgette@example.com',
                },
            },
        ];
        const result = (0, orderMissions_1.sortMissionsByDate)(missions, dateTypeMission);
        expect(result).toEqual(expectedSortMissionsByDate);
    });
});

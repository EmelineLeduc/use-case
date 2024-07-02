"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMissions = void 0;
const getMissions = () => [
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
exports.getMissions = getMissions;

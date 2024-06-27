'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getMissions = void 0;
const getMissions = () => [
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
  {
    id: '2',
    label: 'Audit de sécurité informatique',
    beginDate: '2023-02-15',
    endDate: '2023-03-15',
    missionType: 'Audit',
    freelance: {
      id: 'f2',
      firstname: 'Marie',
      lastname: 'Durand',
      email: 'marie.durand@example.com',
    },
  },
];
exports.getMissions = getMissions;

export type DateTypeMission = 'beginDate' | 'endDate';

export type MissionInfo = {
  firstname: string;
  lastname: string;
  beginMission: string;
  endMission: string;
  id: string;
};

export type MissionByDate = {
  [key: string]: MissionInfo[];
};
interface Freelance {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface Mission {
  id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: Freelance;
}

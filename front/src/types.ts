export type MissionInfo = {
  firstname: string;
  lastname: string;
  beginMission: string;
  endMission: string;
  id: number;
};

export type MissionByDate = {
  [key: string]: MissionInfo[];
};

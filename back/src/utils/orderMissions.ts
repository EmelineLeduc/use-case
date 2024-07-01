import { DateTypeMission, Mission, MissionByDate, MissionInfo } from '../types';

export const sortMissionsByDate = (
  missions: Mission[],
  dateTypeMission: DateTypeMission
) => {
  return missions.sort((a, b) => {
    return (
      new Date(a[dateTypeMission]).getTime() -
      new Date(b[dateTypeMission]).getTime()
    );
  });
};

export const groupMissionsByDate = (
  sortedMissions: Mission[],
  dateTypeMission: DateTypeMission
) => {
  let previousKey: null | string = null;

  return sortedMissions.reduce<MissionByDate>((acc, mission) => {
    const missionInfo: MissionInfo = {
      firstname: mission.freelance.firstname,
      lastname: mission.freelance.lastname,
      beginMission: mission.beginDate,
      endMission: mission.endDate,
      id: mission.id,
    };
    const currentKey = mission[dateTypeMission];

    if (previousKey === currentKey) {
      acc[currentKey].push(missionInfo);
      return acc;
    }
    acc[currentKey] = [missionInfo];

    previousKey = currentKey;

    return acc;
  }, {});
};

export const orderMissions = (
  missions: Mission[],
  dateTypeMission: DateTypeMission
) => {
  const sortedMissions = sortMissionsByDate(missions, dateTypeMission);
  return groupMissionsByDate(sortedMissions, dateTypeMission);
};

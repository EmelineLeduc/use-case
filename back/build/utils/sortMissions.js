'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.orderMissions = exports.sortMissionsByDate = void 0;
const sortMissionsByDate = (missions, dateTypeMission) => {
  return missions.sort((a, b) => {
    return (
      new Date(a[dateTypeMission]).getTime() -
      new Date(b[dateTypeMission]).getTime()
    );
  });
};
exports.sortMissionsByDate = sortMissionsByDate;
const groupMissionsByDate = (sortedMissions, dateTypeMission) => {
  let previousKey = null;
  return sortedMissions.reduce((acc, mission) => {
    const missionInfo = {
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
const orderMissions = (missions, dateTypeMission) => {
  const sortedMissions = (0, exports.sortMissionsByDate)(
    missions,
    dateTypeMission
  );
  return groupMissionsByDate(sortedMissions, dateTypeMission);
};
exports.orderMissions = orderMissions;

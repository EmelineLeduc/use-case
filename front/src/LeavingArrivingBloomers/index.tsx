import { MissionByDate } from '../types';
import BloomerDateList from '../BloomerDateList';
import './style.css';

interface LeavingArrivingBloomers {
  arrivingBloomers: MissionByDate;
  leavingBloomers: MissionByDate;
}

const filterBloomersByDate = (bloomers: MissionByDate) => {
  const today = new Date();
  const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);

  const filteredEntries = Object.entries(bloomers).filter((date) => {
    const dateMission = new Date(date[0]);
    if (dateMission >= today && dateMission <= endOfNextMonth) {
      return date;
    }
  });
  const result = Object.fromEntries(filteredEntries);
  return result;
};

const LeavingArrivingBloomers = ({
  arrivingBloomers,
  leavingBloomers,
}: LeavingArrivingBloomers) => {
  const filteredBloomersByArrivingDate = filterBloomersByDate(arrivingBloomers);
  const filteredBloomersByLeavingDate = filterBloomersByDate(leavingBloomers);

  return (
    <div className="centerWrapper">
      <div className="container">
        <div className="closeButton"></div>
        <div className="scrollContent">
          <div className="bloomerListContainer">
            <BloomerDateList
              bloomerDateList={filteredBloomersByArrivingDate}
              stateBloomer="arriving"
            />
            <BloomerDateList
              bloomerDateList={filteredBloomersByLeavingDate}
              stateBloomer="leaving"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeavingArrivingBloomers;

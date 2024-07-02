import { useCallback, useState } from 'react';
import { MissionByDate } from '../types';
import BloomerDateList from '../BloomerDateList';
import './style.css';

interface LeavingArrivingBloomersProps {
  arrivingBloomers: MissionByDate;
  leavingBloomers: MissionByDate;
  closeList: () => void;
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
  closeList,
}: LeavingArrivingBloomersProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const filteredBloomersByArrivingDate = filterBloomersByDate(arrivingBloomers);
  const filteredBloomersByLeavingDate = filterBloomersByDate(leavingBloomers);

  const closeButton = useCallback(() => {
    setIsVisible(false);
    closeList();
  }, [closeList]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="container" data-testid="list">
      <div className="closeButton" onClick={closeButton}></div>
      <div className="scrollContent">
        <div className="containerBloomerList">
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
  );
};
export default LeavingArrivingBloomers;

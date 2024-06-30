import { useState } from 'react';
import LeavingArrivingBloomers from '../LeavingArrivingBloomers';
import { MissionByDate } from '../types';

const Home = () => {
  const [displayList, setDisplayList] = useState(false);
  const arriving: MissionByDate = {};
  const leaving: MissionByDate = {};

  const handleDisplayList = () => {
    setDisplayList(true);
  };
  const handleCloseList = () => {
    setDisplayList(false);
  };

  return (
    <>
      {displayList ? (
        <LeavingArrivingBloomers
          arrivingBloomers={arriving}
          leavingBloomers={leaving}
          closeList={handleCloseList}
        />
      ) : (
        <button className="displayList" onClick={handleDisplayList}>
          Display list of bloomers
        </button>
      )}
    </>
  );
};

export default Home;

import { useState } from 'react';
import LeavingArrivingBloomers from '../LeavingArrivingBloomers';
import { MissionByDate } from '../types';
import './style.css';

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
        <button className="buttonDisplayList" onClick={handleDisplayList}>
          Afficher la liste des bloomers
        </button>
      )}
    </>
  );
};

export default Home;

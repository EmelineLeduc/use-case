import { useCallback, useEffect, useState } from 'react';
import LeavingArrivingBloomers from '../LeavingArrivingBloomers';
import { MissionByDate } from '../types';
import './style.css';

interface Mission {
  arrivingBloomers: MissionByDate;
  leavingBloomers: MissionByDate;
}
const Home = () => {
  const [displayList, setDisplayList] = useState(false);
  const [missions, setMissions] = useState<Mission | null>(null);

  const handleDisplayList = useCallback(() => {
    setDisplayList(true);
  }, []);
  const handleCloseList = useCallback(() => {
    setDisplayList(false);
  }, []);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('http://localhost:8080/missions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const missions = await response.json();
        setMissions(missions);
      } catch (error) {
        console.error('Failed to fetch missions:', error);
      }
    };

    fetchMissions();
  }, []);

  if (!missions) {
    return <div>Loading...</div>;
  }
  const { arrivingBloomers, leavingBloomers } = missions;

  return (
    <>
      {displayList ? (
        <LeavingArrivingBloomers
          arrivingBloomers={arrivingBloomers}
          leavingBloomers={leavingBloomers}
          closeList={handleCloseList}
        />
      ) : (
        <button
          className="buttonDisplayList"
          onClick={handleDisplayList}
          data-testid="buttonDisplayList"
        >
          Afficher la liste des bloomers
        </button>
      )}
    </>
  );
};

export default Home;

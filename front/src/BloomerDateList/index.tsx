import { useMemo } from 'react';
import './style.css';
import { MissionByDate } from '../types';
import BloomerList from '../BloomerList';
import BloomerCountState from '../BloomerCountState';

interface BloomerDateListProps {
  bloomerDateList: MissionByDate;
  stateBloomer: 'arriving' | 'leaving';
}

const BloomerDateList = ({
  bloomerDateList,
  stateBloomer,
}: BloomerDateListProps) => {
  const totalBloomers = useMemo(
    () => Object.values(bloomerDateList).flat().length,
    [bloomerDateList]
  );
  const colorClass = useMemo(
    () => (stateBloomer === 'arriving' ? 'greenText' : 'redText'),
    [stateBloomer]
  );
  const dates = useMemo(() => Object.keys(bloomerDateList), [bloomerDateList]);
  const lastDate = useMemo(() => dates[dates.length - 1], [dates]);

  return (
    <div>
      <BloomerCountState
        stateBloomer={stateBloomer}
        totalBloomers={totalBloomers}
      />
      {Object.entries(bloomerDateList).map(([date, bloomers]) => (
        <div key={date}>
          <div className="containerCircleAndDate">
            <div className="circle"></div>
            <p className={`textDate ${colorClass}`}>{date}</p>
          </div>
          <BloomerList
            bloomers={bloomers}
            showVerticalLine={date !== lastDate}
          />
        </div>
      ))}
    </div>
  );
};

export default BloomerDateList;

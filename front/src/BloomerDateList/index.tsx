import { useMemo } from 'react';
import { MissionByDate } from '../types';
import BloomerList from '../BloomerList';
import BloomerCountState from '../BloomerCountState';
import './style.css';
interface BloomerDateListProps {
  bloomerDateList: MissionByDate;
  stateBloomer: 'arriving' | 'leaving';
}

const convertDateFormat = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR');
};

const BloomerDateList = ({
  bloomerDateList,
  stateBloomer,
}: BloomerDateListProps) => {
  const totalBloomers = useMemo(
    () => Object.values(bloomerDateList).flat().length,
    [bloomerDateList]
  );
  const dates = useMemo(() => Object.keys(bloomerDateList), [bloomerDateList]);
  const lastDate = dates[dates.length - 1];
  const colorClass = stateBloomer === 'arriving' ? 'greenText' : 'redText';

  return (
    <div>
      <BloomerCountState
        stateBloomer={stateBloomer}
        totalBloomers={totalBloomers}
      />
      {Object.entries(bloomerDateList).map(([date, bloomers]) => (
        <div key={date} className="containerDateAndBloomers">
          <div className="containerCircleAndDate">
            <div className="circle"></div>
            <p className={`textDate ${colorClass}`}>
              {convertDateFormat(date)}
            </p>
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

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
  const totalBloomers = Object.values(bloomerDateList).flat().length;
  const colorClass = stateBloomer === 'arriving' ? 'greenText' : 'redText';

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
          <BloomerList bloomers={bloomers} />
        </div>
      ))}
    </div>
  );
};

export default BloomerDateList;

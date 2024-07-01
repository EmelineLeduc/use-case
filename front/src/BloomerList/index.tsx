import { MissionInfo } from '../types';
import './style.css';

interface BloomerListProps {
  bloomers: MissionInfo[];
  showVerticalLine: boolean;
}

const BloomerList = ({ bloomers, showVerticalLine }: BloomerListProps) => {
  const verticalLineHeight = bloomers.length * 35;
  return (
    <div className="bloomerDetails">
      {showVerticalLine && (
        <div
          className="verticalLine"
          style={{ height: `${verticalLineHeight}px` }}
        ></div>
      )}
      <div>
        {bloomers.map((bloomer) => (
          <div key={bloomer.id}>
            <p
              className="textBloomer"
              style={{ marginLeft: showVerticalLine ? '0' : '10px' }}
            >{`${bloomer.firstname} ${bloomer.lastname}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloomerList;

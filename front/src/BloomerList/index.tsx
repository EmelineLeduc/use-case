import { MissionInfo } from '../types';
import './style.css';

interface BloomerListProps {
  bloomers: MissionInfo[];
  showVerticalLine: boolean; // Nouvelle prop
}

const BloomerList = ({ bloomers, showVerticalLine }: BloomerListProps) => {
  const verticalLineHeight = bloomers.length * 30;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {showVerticalLine && (
        <div
          className="verticalLine"
          style={{ height: `${verticalLineHeight}px` }}
        ></div>
      )}
      <div>
        {bloomers.map((bloomer) => (
          <div key={bloomer.id} className="bloomerDetails">
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

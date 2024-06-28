import { MissionInfo } from '../types';
import './style.css';

interface BloomerListProps {
  bloomers: MissionInfo[];
}

const BloomerList = ({ bloomers }: BloomerListProps) => {
  const verticalLineHeight = bloomers.length * 30;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        className="verticalLine"
        style={{ height: `${verticalLineHeight}px` }}
      ></div>
      <div>
        {bloomers.map((bloomer) => (
          <div key={bloomer.id} className="bloomerDetails">
            <p className="textBloomer">{`${bloomer.firstname} ${bloomer.lastname}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloomerList;

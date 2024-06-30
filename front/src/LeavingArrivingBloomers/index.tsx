import { MissionByDate } from '../types';
import BloomerDateList from '../BloomerDateList';
import './style.css';

interface LeavingArrivingBloomers {
  arrivingBloomers: MissionByDate;
  leavingBloomers: MissionByDate;
}

const LeavingArrivingBloomers = ({
  arrivingBloomers,
  leavingBloomers,
}: LeavingArrivingBloomers) => {
  return (
    <div className="centerWrapper">
      <div className="container">
        <div className="closeButton"></div>
        <div className="scrollContent">
          <div className="bloomerListContainer">
            <BloomerDateList
              bloomerDateList={arrivingBloomers}
              stateBloomer="arriving"
            />
            <BloomerDateList
              bloomerDateList={leavingBloomers}
              stateBloomer="leaving"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeavingArrivingBloomers;

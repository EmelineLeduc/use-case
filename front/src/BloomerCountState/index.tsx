import './style.css';

interface BloomerCountStateProps {
  stateBloomer: 'arriving' | 'leaving';
  totalBloomers: number;
}
const BloomerCountState = ({
  stateBloomer,
  totalBloomers,
}: BloomerCountStateProps) => {
  const bloomerStateText = stateBloomer === 'arriving' ? 'entrant' : 'sortant';
  const colorClass = stateBloomer === 'arriving' ? 'greenText' : 'redText';
  const conditionToPluralize = totalBloomers > 1 ? 's' : '';

  return (
    <p className="text">
      <span className={`totalBloomers ${colorClass}`}>{totalBloomers}</span>{' '}
      Bloomer
      {conditionToPluralize} {bloomerStateText}
      {conditionToPluralize}
    </p>
  );
};
export default BloomerCountState;

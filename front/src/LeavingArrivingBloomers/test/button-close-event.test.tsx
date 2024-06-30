import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import LeavingArrivingBloomers from '../index';
import { MissionByDate } from '../../types';

describe('Button link event in LeavingArrivingBloomers component', () => {
  it('should close the list when clicking on the close button', () => {
    const mockArrivingBloomers: MissionByDate = {
      '2024-07-08': [
        {
          firstname: 'Michel',
          lastname: 'Cacahuete',
          beginMission: '2024-07-08',
          endMission: '2024-07-29',
          id: 42,
        },
      ],
      '2024-07-15': [
        {
          firstname: 'Laura',
          lastname: 'Choux',
          beginMission: '2024-07-15',
          endMission: '2024-07-30',
          id: 16,
        },
      ],
    };
    const mockLeavingBloomers: MissionByDate = {
      '2024-07-29': [
        {
          firstname: 'Michel',
          lastname: 'Cacahuete',
          beginMission: '2024-07-08',
          endMission: '2024-07-29',
          id: 42,
        },
      ],
      '2024-07-30': [
        {
          firstname: 'Laura',
          lastname: 'Choux',
          beginMission: '2024-07-12',
          endMission: '2024-07-30',
          id: 16,
        },
      ],
    };
    const closeList = jest.fn();

    const props = {
      arrivingBloomers: mockArrivingBloomers,
      leavingBloomers: mockLeavingBloomers,
      closeList,
    };

    const { container } = render(<LeavingArrivingBloomers {...props} />);
    const button = container.getElementsByClassName('closeButton')[0];
    fireEvent.click(button);

    expect(closeList).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('list')).not.toBeInTheDocument();
  });
});

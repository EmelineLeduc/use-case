import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../index';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.enableMocks();
  fetchMock.resetMocks();
  fetchMock.doMock();
  fetchMock.mockIf(/^http:\/\/localhost:8080\/.*$/, (req) => {
    if (req.url.endsWith('/missions')) {
      return Promise.resolve({
        body: JSON.stringify({
          arrivingBloomers: [],
          leavingBloomers: [],
        }),
        status: 200,
      });
    }
    return Promise.reject('URL not mocked');
  });
});

describe('Home component', () => {
  it('should display LeavingArrivingBloomers component after click event', async () => {
    render(<Home />);
    expect(screen.queryByTestId('list')).toBeNull();

    const button = await screen.findByTestId('buttonDisplayList');
    fireEvent.click(button);

    const list = await screen.findByTestId('list');
    expect(list).toBeInTheDocument();
  });
});

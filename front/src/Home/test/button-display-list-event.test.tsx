import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Home from '../index';

describe('App component tests', () => {
  it('clicking the "Afficher la liste des bloomers" button shows the LeavingArrivingBloomers component', () => {
    const { container } = render(<Home />);
    const button = container.getElementsByClassName('buttonDisplayList')[0];
    fireEvent.click(button);
  });
});

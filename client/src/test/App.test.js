import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home page renders site title correctly', () => {
  render(<Home />);
  const linkElement = screen.getByText(/CIS 550 Project/i);
  expect(linkElement).toBeInTheDocument();
});

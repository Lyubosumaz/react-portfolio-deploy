import { render, screen } from '@testing-library/react';
import { App } from './index';

test('renders correctly', () => {
  render(<App />);
  const textElement = screen.getByText(/My Portfolioooo/i);
  expect(textElement).toBeInTheDocument();
});

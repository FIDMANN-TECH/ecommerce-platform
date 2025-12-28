import { render, screen } from '@testing-library/react';
import App from './App';

test('renders e-commerce platform heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/e-commerce platform/i);
  expect(headingElement).toBeInTheDocument();
});

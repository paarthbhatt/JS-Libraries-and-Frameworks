import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText(/React Boilerplate/i);
  expect(headerElement).toBeInTheDocument();
});
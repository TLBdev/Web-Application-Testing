import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders baseball scoreboard', () => {
  const { getByText, getAllByText } = render(<App />);
  const strikeElement = getAllByText(/strike/i);
  const ballElement = getAllByText(/ball/i);
  const foulElement = getByText(/foul/i);
  const hitElement = getByText(/hit/i);
  strikeElement.forEach((e) => expect(e).toBeInTheDocument())
  ballElement.forEach((e) => expect(e).toBeInTheDocument())
  expect(foulElement).toBeInTheDocument();
  expect(hitElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App, { strikeHandlertest } from './App';

test('returns an incremented number no greater than 2', () => {
  expect(strikeHandlertest(0)).toBe(1)
  expect(strikeHandlertest(1)).toBe(2)
  expect(strikeHandlertest(2)).toBe(0)
  expect(strikeHandlertest(3)).toBe(0)
})

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

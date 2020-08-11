import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../../App';

afterEach(cleanup);

test('Renders Home Component', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeTruthy();
});

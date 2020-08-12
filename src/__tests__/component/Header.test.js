import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/header';
import { NAVIGATION_HEADERS } from '../../constants/content';

test('Render correct numbers of nav links', () => {
  const { getByText } = render(<Header />);
  NAVIGATION_HEADERS.map((navigationHeader) => {
    expect(getByText(navigationHeader.title)).toBeTruthy();
  });
});

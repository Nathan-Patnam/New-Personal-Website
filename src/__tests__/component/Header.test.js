import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/header';
import { NAVIGATION_HEADERS } from '../../constants/content';

const doNothing = () => {
  return;
};

test('Render correct numbers of nav links', () => {
  const { getByText } = render(
    <Header pageToShow={'Home'} changePageToShow={doNothing} />
  );
  NAVIGATION_HEADERS.map((navigationHeader) => {
    expect(getByText(navigationHeader.title)).toBeTruthy();
  });
});

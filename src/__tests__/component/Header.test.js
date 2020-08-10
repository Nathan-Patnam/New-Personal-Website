import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('Render correct numbers of nav links', () => {
  render(<Header />);
  const aboutButton = screen.getByText(/About/i);
  const experienceButton = screen.getByText(/Experience/i);
  const serviceButton = screen.getByText(/Service/i);
  const projectsButton = screen.getByText(/Projects/i);
  expect(aboutButton).toBeInTheDocument();
  expect(experienceButton).toBeInTheDocument();
  expect(serviceButton).toBeInTheDocument();
  expect(projectsButton).toBeInTheDocument();
});

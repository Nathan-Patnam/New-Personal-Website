import React from 'react';
import { shallow } from 'enzyme';
import Home, { AboutMe } from '../../screens/home';
import Typography from '@material-ui/core/Typography';

test('Renders Home Screen', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(AboutMe)).toHaveLength(1);
});

test('Renders AboutMe Component', () => {
  const wrapper = shallow(<AboutMe />);
  expect(wrapper.find(Typography)).toHaveLength(2);
});

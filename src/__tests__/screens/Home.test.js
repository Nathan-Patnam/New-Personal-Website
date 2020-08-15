import React from 'react';
import { shallow } from 'enzyme';
import Home, {
  AboutMe,
  FeaturedArticles,
  FeaturedProjects,
} from '../../screens/home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { ARTICLES_WRITTEN } from '../../constants/content';

test('Renders Home Screen Correctly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(AboutMe)).toHaveLength(1);
});

test('Renders AboutMe Component Correctly', () => {
  const wrapper = shallow(<AboutMe />);
  expect(wrapper.find(Typography)).toHaveLength(2);
});

test('Renders FeaturedArticles Component Correctly', () => {
  const wrapper = shallow(<FeaturedArticles />);
  expect(wrapper.find(Card)).toHaveLength(ARTICLES_WRITTEN.length);
});

test('Renders FeaturedProjects Component Correctly', () => {
  const wrapper = shallow(<FeaturedProjects />);
  expect(wrapper.find(Typography)).toHaveLength(1);
});

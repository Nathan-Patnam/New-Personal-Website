import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '../../components/contact';

test('Render correct numbers of nav links', () => {
  const wrapper = shallow(<ContactForm />);
});

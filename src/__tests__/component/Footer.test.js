import React from 'react';
import { shallow } from 'enzyme';
import Footer, { Icon } from '../../components/footer';
import { FOOTER_ICONS } from '../../constants/content';

describe('<Footer />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Icon)).toHaveLength(FOOTER_ICONS.length);
  });
});

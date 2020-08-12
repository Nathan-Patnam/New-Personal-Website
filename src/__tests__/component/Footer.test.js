import React from 'react';
import { shallow } from 'enzyme';
import Footer, { Icon } from '../../components/footer';
import { FOOTER_ICONS } from '../../constants/content';

describe('<Footer />', () => {
  it(`Renders ${FOOTER_ICONS.length} <Icon /> components`, () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Icon)).toHaveLength(FOOTER_ICONS.length);
  });
});

describe('<Icon />', () => {
  it('Renders nothing when Icon type is not a supported type', () => {
    const wrapper = shallow(<Icon type={'Dribble'} />);
    expect(wrapper.find(Icon)).toHaveLength(0);
  });

  it('Renders nothing when Icon type is undefined', () => {
    const wrapper = shallow(<Footer type={undefined} />);
    expect(wrapper.find(Icon)).toHaveLength(FOOTER_ICONS.length);
  });
});

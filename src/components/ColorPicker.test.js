import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker portion', () => {
  it('renders the color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('state is updated to reflect the button clicked', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state('color')).toBeAny(String);
  });
});

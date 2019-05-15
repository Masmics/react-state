import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker portion', () => {
  it('renders the color picker', () => {
    const wrapper = shallow(<ColorPicker backgroundColor="red" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('state is updated to reflect the button clicked', () => {
    const color = jest.fn();
    const wrapper = shallow(<ColorPicker color={color} />);
    wrapper.find('button').at(1).simulate('click');
    expect(color).toHaveBeenCalledWith('yellow');
  });
});

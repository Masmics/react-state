import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders the page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot;
  });
});

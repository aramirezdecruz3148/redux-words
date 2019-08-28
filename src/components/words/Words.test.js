import React from 'react';
import { shallow } from 'enzyme';
import Words from './Words';

describe('Words component', () => {
  it('renders Words', () => {
    const wrapper = shallow(<Words words={['a', 'string']} />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('renders SearchForm', () => {
    const wrapper = shallow(<SearchForm searchTerm='hi' handleOnChange={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

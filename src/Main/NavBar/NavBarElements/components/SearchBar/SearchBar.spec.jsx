import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should match snapshot', () => {
    expect(SearchBar).toMatchSnapshot();
  });
});

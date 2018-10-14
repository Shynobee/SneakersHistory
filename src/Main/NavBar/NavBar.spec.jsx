import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('Should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should match snapshot', () => {
    expect(NavBar).toMatchSnapshot();
  });
});

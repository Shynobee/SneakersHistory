import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';

describe('Body', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Should match snapshot', () => {
    expect(Body).toMatchSnapshot();
  });
})

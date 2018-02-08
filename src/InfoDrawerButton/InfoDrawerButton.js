import React from 'react';
import ReactDOM from 'react-dom';
import InfoDrawerButton from './InfoDrawerButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoDrawerButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

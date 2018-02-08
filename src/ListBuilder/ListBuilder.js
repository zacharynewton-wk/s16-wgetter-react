import React from 'react';
import ReactDOM from 'react-dom';
import ListBuilder from './ListBuilder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListBuilder />, div);
  ReactDOM.unmountComponentAtNode(div);
});

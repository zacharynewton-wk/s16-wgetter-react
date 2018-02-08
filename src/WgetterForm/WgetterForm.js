import React from 'react';
import ReactDOM from 'react-dom';
import WgetterForm from './WgetterForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WgetterForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

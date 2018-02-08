import React from 'react';
import ReactDOM from 'react-dom';
import DirectoryInput from './DirectoryInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DirectoryInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

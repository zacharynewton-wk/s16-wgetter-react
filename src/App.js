import React, { Component } from 'react';
import './App.css';

import WgetterForm from './WgetterForm/WgetterForm';
import InfoDrawer from './InfoDrawer/InfoDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Section 16 WGetter</h2>
        <WgetterForm />
        <InfoDrawer />
      </div>
    );
  }
}

export default App;

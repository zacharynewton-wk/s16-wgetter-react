import React, { Component } from 'react';
import './WgetterForm.css';

import DirectoryInput from '../DirectoryInput/DirectoryInput';

class WgetterForm extends Component {
  render () {
    return (
      <div className="WgetterForm">
        <label for="midx-dir-input">Master.idx Files Directory</label>
        <DirectoryInput id="midx-dir-input" />
        <label for="out-dir-input">Output Directory</label>
        <DirectoryInput id="out-dir-input" />
      </div>
    );
  }
}

export default WgetterForm;

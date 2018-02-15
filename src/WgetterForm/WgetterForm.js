import React, { Component } from 'react';
import './WgetterForm.css';
import Store from '../lib/tools/store';

import DirectoryInput from '../DirectoryInput/DirectoryInput';
import ListBuilder from '../ListBuilder/ListBuilder';

class WgetterForm extends Component {
  constructor() {
    super();
    let defaultState = {
      masterIdxDir: '',
      outDir: '',
      cikList: [],
      saveDefaults: false,
    };
    this.store = new Store({
      configName: 'userDefaults',
      defaults: defaultState
    });
    this.state = defaultState;
    let keys = Object.keys(defaultState);
    for (let i = 0; i < keys.length; i++) {
      this.state[keys[i]] = this.store.get(keys[i]);
    }
  }

  render () {
    return (
      <div className="WgetterForm">
        <label htmlFor="midx-dir-input">Master.idx Files Directory</label>
        <DirectoryInput id="midx-dir-input"
          selectedDirectory={this.state.masterIdxDir}
          selectDirectory={(dirPath) => this.selectMasterIdxDir(dirPath)} />

        <label htmlFor="out-dir-input">Output Directory</label>
        <DirectoryInput id="out-dir-input"
          selectedDirectory={this.state.outDir}
          selectDirectory={(dirPath) => this.selectOutDir(dirPath)} />

        <label htmlFor="list-builder">CIK List</label>
        <ListBuilder
          cikList={this.state.cikList}
          addCik={(cik) => this.addCik(cik)}
          removeCik={(index) => this.removeCik(index)} />
      </div>
    );
  }

  selectMasterIdxDir (dirPath) {
    this.setState({masterIdxDir: dirPath});
  }

  selectOutDir (dirPath) {
    this.setState({outDir: dirPath});
  }

  addCik (cik) {
    let cikList = this.state.cikList;
    cikList.unshift(cik);
    this.setState({cikList: cikList});
  }

  removeCik (index) {
    let cikList = this.state.cikList;
    cikList.splice(index, 1);
    this.setState({cikList: cikList});
  }
}

export default WgetterForm;

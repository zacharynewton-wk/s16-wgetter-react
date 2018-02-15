import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DirectoryInput.css';
import ClassNameBuilder from '../lib/ClassNameBuilder';
// hacky workaround for fs not showing up
const electron = window.require('electron');
const remote = electron.remote;
// eslint-disable-next-line
const fs = electron.remote.require('fs');
// eslint-disable-next-line
const ipcRenderer  = electron.ipcRenderer;

class DirectoryInput extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selectedDirectory !== this.props.selectedDirectory ||
      nextProps.selectDirectory !== this.props.selectDirectory;
  }

  render () {
    let empty = !this.props.selectedDirectory;
    let directoryDisplayClassNameBuilder = new ClassNameBuilder('directory-display');
    directoryDisplayClassNameBuilder.add('empty', empty);
    return (
      <div id={this.props.id} className="DirectoryInput" onClick={() => this.selectDirectory()}>
        <span className={directoryDisplayClassNameBuilder.className}>
          {empty ? 'Select directory' : this.props.selectedDirectory}
        </span>
        <span className="directory-button">
          <span className="icon icon-folder-open-g2"></span>
        </span>
      </div>
    );
  }

  selectDirectory() {
    const currentWindow = remote.getCurrentWindow();
    if (!currentWindow || !remote.dialog) {
      return new Error('No window or dialog created');
    }
    let path = remote.dialog.showOpenDialog(currentWindow, {
      properties: ['openDirectory', 'createDirectory']
    });
    if (path && path[0]) {
      this.props.selectDirectory(path[0]);
    }
  }
}

DirectoryInput.propTypes = {
  selectedDirectory: PropTypes.string,
  selectDirectory: PropTypes.func
};

DirectoryInput.defaultProps = {
  selectDirectory: () => {}
};

export default DirectoryInput;

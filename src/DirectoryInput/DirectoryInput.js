import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DirectoryInput.css';
import ClassNameBuilder from '../lib/ClassNameBuilder';

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
      <div className="DirectoryInput" onClick={() => this.selectDirectory()}>
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
    if (!remote.getCurrentWindow() || !remote.dialog) {
      return new Error('No window or dialog created');
    }
    let path = remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ['openDirectory', 'createDirectory']
    });
    this.props.selectDirectory(path ? path[0] : null);
  }
}

DirectoryInput.propTypes = {
  selectedDirectory: PropTypes.string,
  selectDirectory: PropTypes.func
};

export default DirectoryInput;

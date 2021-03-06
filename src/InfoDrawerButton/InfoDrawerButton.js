import React, { Component } from 'react';
import './InfoDrawerButton.css';

class InfoDrawerButton extends Component {
  render () {
    return (
      <div className="InfoDrawerButton"
        onClick={() => this.props.onClick()}>
        <i className="icon icon-lg icon-support-sign-corner"></i>
      </div>
    );
  }
}

export default InfoDrawerButton;

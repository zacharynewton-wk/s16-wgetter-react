import React, { Component } from 'react';
import './InfoDrawer.css';

import InfoDrawerButton from '../InfoDrawerButton/InfoDrawerButton';
import ClassNameBuilder from '../lib/ClassNameBuilder';

class InfoDrawer extends Component {
  constructor () {
    super();
    this.state = {
      isOpen: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isOpen !== this.state.isOpen;
  }

  render () {
    let screenClassNameBuilder = new ClassNameBuilder('InfoDrawer__screen');
    let divClassNameBuilder = new ClassNameBuilder('InfoDrawer__div');
    screenClassNameBuilder.add('open', this.state.isOpen);
    divClassNameBuilder.add('open', this.state.isOpen);
    return (
      <div className="InfoDrawer">
        <div className={screenClassNameBuilder.className}
          onClick={() => this.closeDrawer()}
        ></div>
        <div className={divClassNameBuilder.className}>
          <h2>Info</h2>
          <p>Welcome to the Section 16 wgetter desktop app! Usage is pretty straightforward:</p>
          <ol>
            <li>Select master.idx file(s) location</li>
            <li>Select download location</li>
            <li>Build your list of CIKs</li>
            <li>Download!</li>
          </ol>
          <h3>Feedback</h3>
          <p>Find a bug? Have a suggestion for a new or missing feature?</p>
          <p>Contact a developer for support, questions, comments, and concerns:</p>
          <p>Zach Newton: <div>&nbsp;&nbsp;<i className="icon icon-feedback"></i>&nbsp;<a href="mailTo:zach.newton@workiva.com">zach.newton@workiva.com</a></div></p>
        </div>
        <InfoDrawerButton onClick={() => this.toggleDrawer()} />
      </div>
    );
  }

  openDrawer () {
    this.setState({isOpen: true});
  }

  closeDrawer () {
    this.setState({isOpen: false});
  }

  toggleDrawer () {
    let isOpen = this.state.isOpen;
    this.setState({isOpen: !isOpen});
  }
}

export default InfoDrawer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListBuilder.css';

class ListBuilder extends Component {
  constructor () {
    super();
    this.state = {
      cikInput: ''
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.cikList !== this.props.cikList ||
      nextState.cikInput !== this.state.cikInput;
  }

  render () {
    return (
      <div className="ListBuilder">
        <div className="input-wrapper">
            <input type="text" value={this.state.cikInput} name="cik" onInput={(e) => this.handleInput(e.target.value)} />
            <button className="btn btn-primary" id="cik-add-btn">
                <i className="icon icon-plus"></i>
            </button>
        </div>
        <ul id="cik-list">
          {this.props.cikList.map((cik, i) => (
            <li key={cik}>
              <span>{cik}</span>
              <button className="btn" onClick={() => this.removeCik(i)}>
                <i className="icon icon-minus"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleInput (value) {
    this.setState({cikInput: value});
  }

  addCik () {
    this.props.removeCik(this.state.cikInput);
  }

  removeCik (index) {
    this.props.removeCik(index);
  }
}

ListBuilder.propTypes = {
  cikList: PropTypes.array,
  removeCik: PropTypes.func,
  addCik: PropTypes.func
};

export default ListBuilder;

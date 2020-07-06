import React, { Component } from 'react';
import './IncDec.scss';
import decIcon from '../../assets/icons/minus-icon.svg';
import refreshIcon from '../../assets/icons/refresh-icon.svg';
import incIcon from '../../assets/icons/plus-icon.svg';

class IncDec extends Component {
  state = {
    value: 0,
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    let classes = 'inc-dec';
    const localStorageMode = localStorage.getItem('mode');

    if (localStorageMode === 'true') {
      classes += ' dark';
    }

    return (
      <div className={classes}>
        <div className='inc-dec-container'>
          <div className='number-container'>
            <h2>{this.state.value}</h2>
          </div>
          <div className='controls-container'>
            <img
              onClick={this.handleDecrement}
              className='icon'
              src={decIcon}
              alt='dec-icon'
            />
            <img
              onClick={this.handleReset}
              className='icon'
              src={refreshIcon}
              alt='refresh-icon'
            />
            <img
              onClick={this.handleIncrement}
              className='icon'
              src={incIcon}
              alt='inc-icon'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IncDec;

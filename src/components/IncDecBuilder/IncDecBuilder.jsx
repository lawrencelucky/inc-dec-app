import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import IncDec from '../IncDec/IncDec';
import './IncDecBuilder.scss';

class IncDecBuilder extends Component {
  state = {
    dark: false,
  };

  handleMode = () => {
    this.setState({ dark: !this.state.dark });
    localStorage.setItem('mode', this.state.dark);
  };

  render() {
    return (
      <div>
        <Header mode={this.state.dark} handleMode={this.handleMode} />
        <IncDec mode={this.state.dark} />
        <Footer mode={this.state.dark} />
      </div>
    );
  }
}

export default IncDecBuilder;

import React, { Component, PropTypes } from 'react';

const propTypes = {
};

const defaultProps = {
};

class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    let value = Math.round(Math.random()*100);
    this.props.onUpdate(value);
  }

  render() {
    return(
      <div>
        <h1>RANDOM NUMBER: {this.props.number}</h1>
        <button onClick={this.updateNumber}>Randomize</button>
      </div>
    );
  }
}

RandomNumber.propTypes = propTypes;
RandomNumber.defaultProps = defaultProps;

export default RandomNumber;

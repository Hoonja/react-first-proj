import React, { Component, PropTypes } from 'react';

const propTypes = {
  optionalArray: PropTypes.array,
  optionalBoo: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,

  optionalNode: React.PropTypes.node,
  optionalElement: React.PropTypes.element,
  optionalMessage: React.PropTypes.instanceOf(Message),
  optionalEnum: React.PropTypes.oneOf(['News', 'Phosos']),
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

const defaultProps = {
};

class ValidationExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>ValidationExample</div>
    );
  }
}

ValidationExample.propTypes = propTypes;
ValidationExample.defaultProps = defaultProps;

export default ValidationExample;

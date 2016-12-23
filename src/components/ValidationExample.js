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
  ]),
  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
  optionalObjectWithShape: React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  }),
  requiredFunc: React.PropTypes.func.isRequired,
  requiredAny: React.PropTypes.any.isRequired,
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error('Validation failed!');
    }
  }
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

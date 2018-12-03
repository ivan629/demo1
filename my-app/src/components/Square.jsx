import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
  return (
    <button type="submit" className="square " onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Square;

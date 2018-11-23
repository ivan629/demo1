import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes  = {
  onclick: PropTypes.func,
    value: PropTypes.string
};

export default Square;

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationLink({ children, ...rest }) {
  return (
    <NavLink activeClassName="toggled" {...rest}>{children}</NavLink>
  );
}
NavigationLink.propTypes = {
  children: PropTypes.string
};

export default NavigationLink;

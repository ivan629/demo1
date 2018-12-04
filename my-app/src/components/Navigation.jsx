import React from 'react';
import NavigationLink from './NavigationLink';

function Navigation() {
  return (
    <div className="navigation">
      <NavigationLink exact className="nav_button" to="/">Game</NavigationLink>
      <NavigationLink className="nav_button" to="/register">Register</NavigationLink>
    </div>
  );
}

export default Navigation;

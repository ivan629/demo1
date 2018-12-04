import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationLink({ children, ...rest}){
        return (
            <NavLink activeClassName="toggled" {...rest}>{children}</NavLink>
        );
}

export default NavigationLink;

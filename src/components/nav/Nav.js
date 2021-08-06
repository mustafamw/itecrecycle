import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.scss';

class NavComponent extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recycle-scheme" activeClassName="active">Recycle Scheme</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data-destruction" activeClassName="active">Data Destruction</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active">Laptop Warehouse</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" activeClassName="active">Contact us</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavComponent;

import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Header</h1>
                <nav>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/favorites" exact activeClassName="active">Favorites</NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;
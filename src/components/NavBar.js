import React from 'react';
import Location from './Location.js';

class NavBar extends React.Component {
    render() {
        var data =this.props.data
        return (
            <div className="container">
              <div className="mega-menu-container">
                  <ul className="mega-menu-nav">
                    <li className="mega-menu-nav__item"><a href="#">Location</a>
                    <Location data={data} />
                    </li>
                    <li className="mega-menu-nav__item"><a href="#">Sites</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Building</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Floor</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Bay</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Details</a></li>
                  </ul>
                </div>
            </div>
        )
    }
};
export default NavBar;
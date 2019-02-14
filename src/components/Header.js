import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
            <div class="container">
              <div class="mega-menu-container">
                  <ul class="mega-menu-nav">
                    <li class="mega-menu-nav__item"><a href="#">Location</a>
                      <ul class="drop-down-ul__location">
                        <li><a href="" class="link-right-arrow">Bengaluru</a>
                          <ul class="drop-down-ul__sites">
                            <li><a href="" class="link-right-arrow">BDC 01</a>
                              <ul class="drop-down-ul__tower">
                                <li><a href="" class="link-right-arrow">Tower A</a>
                                  <ul class="drop-down-ul__floor">
                                    <li><a href="" class="link-right-arrow">Floor 01</a>
                                      <ul class="drop-down-ul__bay">
                                        <li><a href="" class="link-right-arrow">Bay 01</a>
                                          <div class="location__detail">
                                            <p>Total Seats: 94</p>
                                            <p>S.No.: 401 to 494</p>
                                            <p>Project: XD Studio</p>
                                            <p>Access: Open Bay</p>
                                            <p>Floor Captions: 03</p>
                                          </div>
                                        </li>
                                        <li><a href="" class="link-right-arrow">Bay 02</a></li>
                                        <li><a href="" class="link-right-arrow">Bay 03</a></li>
                                        <li><a href="" class="link-right-arrow">Bay 04</a></li>
                                        <li><a href="" class="link-right-arrow">Bay 05</a></li>
                                        <li><a href="" class="link-right-arrow">Bay 06</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="" class="link-right-arrow">Floor 02</a></li>
                                    <li><a href="" class="link-right-arrow">Floor 03</a></li>
                                    <li><a href="" class="link-right-arrow">Floor 04</a></li>
                                    <li><a href="" class="link-right-arrow">Floor 05</a></li>
                                    <li><a href="" class="link-right-arrow">Floor 06</a></li>
                                    <li><a href="" class="link-right-arrow">Floor 07</a></li>
                                  </ul>
                                </li>
                                <li><a href="" class="link-right-arrow">Tower B</a></li>
                                <li><a href="" class="link-right-arrow">Tower C</a></li>
                                <li><a href="" class="link-right-arrow">Tower D</a></li>
                                <li><a href="" class="link-right-arrow">Tower E</a></li>
                              </ul>
                            </li>
                            <li><a href="" class="link-right-arrow">BDC 02</a></li>
                            <li><a href="" class="link-right-arrow">BDC 03</a></li>
                            <li><a href="" class="link-right-arrow">BDC 04</a></li>
                            <li><a href="" class="link-right-arrow">BDC 05</a></li>
                            <li><a href="" class="link-right-arrow">BDC 06</a></li>
                            <li><a href="" class="link-right-arrow">BDC 07</a></li>
                          </ul></li>
                        <li><a href="" class="link-right-arrow">Chennai</a></li>
                        <li><a href="" class="link-right-arrow">Gurugram</a></li>
                        <li><a href="" class="link-right-arrow">Hyderabad</a></li>
                        <li><a href="" class="link-right-arrow">Mumbai</a></li>
                      </ul>
                    </li>
                    <li class="mega-menu-nav__item"><a href="#">Sites</a></li>
                    <li class="mega-menu-nav__item"><a href="#">Building</a></li>
                    <li class="mega-menu-nav__item"><a href="#">Floor</a></li>
                    <li class="mega-menu-nav__item"><a href="#">Bay</a></li>
                    <li class="mega-menu-nav__item"><a href="#">Details</a></li>
                  </ul>
                </div>
            </div>
          </header>
        );
    }
}

export default Header;
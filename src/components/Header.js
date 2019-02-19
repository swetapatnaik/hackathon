import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { getData } from './ApiCall.js';


class Header extends Component {
    constructor(props) {    
      super(props);
      this.state = {
        data: []
      };
    }
    componentDidMount(){
      var self = this;
      getData().then((res) => {                
        if (res.error) {
            self.setState({ data: [] });
        } else {      
          self.setState({ data: res.data });                    
        } 
      });
    }

    render() {      
        return (
            <header>
            <div className="container">
              <div className="mega-menu-container">
                  <ul className="mega-menu-nav">
                    <li className="mega-menu-nav__item"><a href="#">Location</a>
                    {this.state.data !== undefined && this.state.data.length !== 0 &&                        
                        <ul className="drop-down-ul__location">
                          {this.state.data.map(groupLocation =>
                          <li key={groupLocation.locationName}>
                            <a href="" className="link-right-arrow">{groupLocation.locationName}</a>                          
                            <ul className="drop-down-ul__sites">
                            {groupLocation.sites.map(groupSites =>
                              <li key={groupSites.siteName}>
                                <a href="" className="link-right-arrow">{groupSites.siteName}</a>
                              <ul className="drop-down-ul__tower">
                              {groupSites.building.map(groupTower =>                                
                                  <li key={groupTower.buildingName}>
                                    <a href="" className="link-right-arrow">{groupTower.buildingName}</a>                                  
                                    <ul className="drop-down-ul__floor">
                                      {groupTower.floor.map(groupFloor =>
                                      <li key={groupFloor.floorName}>
                                        <a href="" className="link-right-arrow">{groupFloor.floorName}</a>                                      
                                        <ul className="drop-down-ul__bay">
                                          {groupFloor.bay.map(groupBay =>
                                          <li key={groupBay.bayName}>
                                            <a href="" className="link-right-arrow">{groupBay.bayName}</a>                                          
                                            <div className="location__detail">
                                              <p>Total seats: {groupBay.details.seats}</p>
                                              <p>S.No.: {groupBay.details.startSeat} to {groupBay.details.endSeat}</p>
                                              <p>Project: {groupBay.details.project}</p>
                                              <p>Access: {groupBay.details.access}</p>
                                              <p>Floor Captions: {groupBay.details.captions}</p>
                                            </div>
                                          
                                          </li>
                                          )}
                                        </ul>
                                        
                                      </li>
                                      )}
                                    </ul>
                                  
                                  </li>
                                  )}
                                </ul>
                                
                              </li>
                              )}
                            </ul>                          
                          </li>
                          )}
                        </ul>                      
                    }
                    </li>
                    <li className="mega-menu-nav__item"><a href="#">Sites</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Building</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Floor</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Bay</a></li>
                    <li className="mega-menu-nav__item"><a href="#">Details</a></li>
                  </ul>
                </div>
            </div>
          </header>
        );
    }
}

export default Header;
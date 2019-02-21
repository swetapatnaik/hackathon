import React from 'react';
import Map from './Map.js';
import BayDetail from './BayDetail.js';


class Location extends React.Component {
    render() {
        var data = this.props.data
        return (

            <ul className="drop-down-ul__location">
                {data && data.length > 0 && data.map(groupLocation =>
                    <li key={groupLocation.locationName}>
                        <Map name={groupLocation.locationName} childrenAvailable={groupLocation.sites}/>
                        <ul className="drop-down-ul__sites">
                            {groupLocation.sites && groupLocation.sites.length > 0 && groupLocation.sites.map(groupSites =>
                                <li key={groupSites.siteName}>
                                    <Map name={groupSites.siteName} childrenAvailable={groupSites.building} />
                                    <ul className="drop-down-ul__tower">
                                        {groupSites.building && groupSites.building.length > 0 && groupSites.building.map(groupTower =>
                                            <li key={groupTower.buildingName}>
                                                <Map name={groupTower.buildingName} childrenAvailable={groupTower.floor}c/>
                                                <ul className="drop-down-ul__floor">
                                                    {groupTower.floor && groupTower.floor.length > 0 && groupTower.floor.map(groupFloor =>
                                                        <li key={groupFloor.floorName}>
                                                            <Map name={groupFloor.floorName} childrenAvailable={groupFloor.bay} />
                                                            <ul className="drop-down-ul__bay">
                                                                {groupFloor.bay && groupFloor.bay.length > 0 && groupFloor.bay.map(groupBay =>
                                                                    <li key={groupBay.bayName}>
                                                                        <Map name={groupBay.bayName} childrenAvailable={groupBay.details} />
                                                                        {groupBay.details.seats && <BayDetail groupBay={groupBay} />}
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
        )
    }
};
export default Location;
import React from 'react';


class Map extends React.Component {    
    render() {
        //const {childrenAvailable} = this.props.childrenAvailable;
        return (                        
          <a href="" className={
              (
              (this.props.childrenAvailable && this.props.childrenAvailable.length > 0) ||
              (this.props.childrenAvailable && this.props.childrenAvailable.seats)
              )
               ? "link-right-arrow" : ""}>{this.props.name}</a>   
        )
    }
};
export default Map;
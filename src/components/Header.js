import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { getData } from './ApiCall.js';
import NavBar from './NavBar.js';


class Header extends Component {
    constructor(props) {    
      super(props);
      this.state = {
        data: [],
        isMounted: false
      };
    }
    componentDidMount(){
      var self = this;
      
      getData().then((res) => {                
        if (res.error) {
            self.setState({ data: [] });
        } else {      
          self.setState({ data: res.data }); 
          self.setState({isMounted: true});                   
        } 
      });
    }

    componentWillUnmount() {
      this.setState({isMounted: false});
    }

    render() {   
      var data = this.state.data, isMounted = this.state.isMounted ;   
        return ( 
          <React.Fragment>
            {data.length > 0 && isMounted ? <NavBar data = {data}/> : null}       
               
            </React.Fragment>       
        );
    }
}

export default Header;
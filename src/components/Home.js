import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

class Home extends Component {
    render() {
        return (
            <Fade in={true}>
            <Paper>
                <h1>My first React App!</h1>
            </Paper>
            </Fade>
        );
    }
}

export default Home;
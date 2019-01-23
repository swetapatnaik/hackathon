import React, {Fragment} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import '../styles/main.scss';

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            
            <main>
            <Switch>
                <Redirect from="/home" to="/" />
                <Route exact path = "/" component = {Home} />
            </Switch>
            </main>
        </Fragment>
    </BrowserRouter>
);

export default App;
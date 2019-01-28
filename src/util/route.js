import React from "react";
import {
    HashRouter,
    Route,
    Redirect,
    Switch,
    // browserHistory
} from 'react-router-dom';
import { Router, browserHistory } from 'react-router';

// Components
import Home from "../containers/Home/Home";
import AddNote from "../containers/AddNote/AddNote";

// SERVER SIDE ROUTE: HashRouter uses a hash symbol in the URL, 
// which has the effect of all subsequent URL path content being ignored in the server request 
// (ie you send "www.mywebsite.com/#/person/john" the server gets "www.mywebsite.com". 
// As a result the server will return the pre # URL response, and 
// then the post # path will be handled by parsed by your client side react application.
export const AppRoutes = () => {
    return (
        <HashRouter history={browserHistory}>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home" />
                )} />
                <Route path="/home" component={Home} />
                <Route exact path="/add-note" component={AddNote} />
            </Switch>
        </HashRouter>
    );
};
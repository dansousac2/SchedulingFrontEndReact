import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import HomePage from "../screens/HomePage/HomePage";
import Login from "../screens/Login/Login";

import CreatePlace from "../screens/Place/CreateP/CreatePlace";
import UpdatePlace from "../screens/Place/UpdateP/UpdatePlace";
import ListPlaces from "../screens/Place/ListAllP/ViewPlaces";

import CreateSport from "../screens/Sport/CreateS/CreateSport";
import UpdateSport from "../screens/Sport/UpdateS/UpdateSport";
import ListSports from "../screens/Sport/ListAllS/ViewSports";

import CreateScheduling from "../screens/Scheduling/CreateSc/CreateSc";
import ListScheduling from "../screens/Scheduling/ListAllSchedulings/ViewScheduling";

import { AuthConsumer } from "./SessionProvider";

function RestrictedRoute( {component: Component, show, ...props} ) {
    return(
        <Route exact {...props} render={ (componentProps) => {
            if(show){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from: componentProps.location}}} />
                )
            }
        }} />
    )

}

function AppRoutes(props) {
    return (
        <BrowserRouter>
            <Switch>
            <Route component = { HomePage } path="/" exact/>
            <Route component = { Login } path="/login" />

            <RestrictedRoute show={props.isAuthenticated} component = { ListPlaces } path="/listPlaces" />
            <RestrictedRoute show={props.isAuthenticated} component = { CreatePlace } path="/createPlace" />
            <RestrictedRoute show={props.isAuthenticated} component = { UpdatePlace } path="/updatePlace/:id" />
     
            <RestrictedRoute show={props.isAuthenticated} component = { ListSports } path="/listSports" />
            <RestrictedRoute show={props.isAuthenticated} component = { CreateSport } path="/createSport" />
            <RestrictedRoute show={props.isAuthenticated} component = { UpdateSport } path="/updateSport/:id" />
           

            <RestrictedRoute show={props.isAuthenticated} component = { ListScheduling } path="/listScheduling" />
            <RestrictedRoute show={props.isAuthenticated} component = { CreateScheduling } path="/createScheduling" />

            </Switch>
        </BrowserRouter>
    );
}

export default () => (
    <AuthConsumer>
        { (context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />) }
    </AuthConsumer>
)

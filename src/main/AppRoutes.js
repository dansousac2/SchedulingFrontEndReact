import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

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

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { HomePage } path="/" exact/>
            <Route component = { Login } path="/login" />

            <Route component = { ListPlaces } path="/listPlaces" />
            <Route component = { CreatePlace } path="/createPlace" />
            <Route component = { UpdatePlace } path="/updatePlace/:id" />
     
            <Route component = { ListSports } path="/listSports" />
            <Route component = { CreateSport } path="/createSport" />
            <Route component = { UpdateSport } path="/updateSport/:id" />
           

            <Route component = { ListScheduling } path="/listScheduling" />
            <Route component = { CreateScheduling } path="/createScheduling" />
        </BrowserRouter>
    )
}

export default AppRoutes;

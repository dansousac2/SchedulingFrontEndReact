import React from "react";
import NavbarItem from './NavbarItem'

function NavBar (props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary"> 
            <div className="container"> 
                <a href="/" className="navbar-brand">My Events</a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive"> 
                    <ul className="navbar-nav">
                        <NavbarItem href="/login" label="Login" />

                        <NavbarItem href="/listPlaces" label="Places" />
                        <NavbarItem href="/createPlace" label="Create Place" />
                        <NavbarItem href="/updatePlace/id:" label="Update Place" />
                        <NavbarItem href="/deletePlace" label="Delete Place" />

                        <NavbarItem href="/listSports" label="Sports" />
                        <NavbarItem href="/createSport" label="Create Sport" />
                        <NavbarItem href="/updateSport/id:" label="Update Sport" />
                        <NavbarItem href="/deleteSport" label="Delete Sport" />
                    </ul>
                </div>
            </div>
        </div> 
    )
}

export default NavBar;
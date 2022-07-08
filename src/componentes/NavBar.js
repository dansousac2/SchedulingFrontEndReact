import React from "react";
import NavbarItem from './NavbarItem'

function NavBar (props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light"> 
            <div className="container"> 
                <a href="/" className="navbar-brand">SAPE</a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive"> 
                    <ul className="navbar-nav">
                        <NavbarItem href="/login" label="Login" />

                        <NavbarItem href="/listPlaces" label="Locais" />
                        <NavbarItem href="/createPlace" label="Criar Local" />

                        <NavbarItem href="/listSports" label="Esportes" />
                        <NavbarItem href="/createSport" label="Criar Esporte" />
                    
                        <NavbarItem href="/listScheduling" label="Agendamentos" />
                        <NavbarItem href="/createScheduling" label="Criar Agendamento" />
                    </ul>
                </div>
            </div>
        </div> 
    )
}

export default NavBar;
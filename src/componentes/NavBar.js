import React from "react";
import NavbarItem from './NavbarItem';
import { AuthConsumer } from '../main/SessionProvider';


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
                        <NavbarItem render={!props.isAuthenticated} href="/login" label="Login" />
                        <NavbarItem render={props.isAuthenticated} href="/login" onClick={props.logout} label="Sair" />

                        <NavbarItem render={props.isAuthenticated} href="/listPlaces" label="Locais" />
                        <NavbarItem render={props.isAuthenticated} href="/createPlace" label="Criar Local" />

                        <NavbarItem render={props.isAuthenticated} href="/listSports" label="Esportes" />
                        <NavbarItem render={props.isAuthenticated} href="/createSport" label="Criar Esporte" />
                    
                        <NavbarItem render={props.isAuthenticated} href="/listScheduling" label="Agendamentos" />
                        <NavbarItem render={props.isAuthenticated} href="/createScheduling" label="Criar Agendamento" />
                    </ul>
                </div>
            </div>
        </div> 
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (
            <NavBar isAuthenticated={context.isAuthenticated} logout={context.end} />
        )}
    </AuthConsumer>
)
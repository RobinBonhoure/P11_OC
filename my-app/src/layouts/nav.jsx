import React from "react";
import { NavLink } from "react-router-dom";

import logoNav from "../img/logo-nav.svg";

function Nav(props) {

    return (
        <nav className="p-nav">
            <NavLink to="/"><img className="logo-nav" src={logoNav} alt="" /></NavLink>
            <div className="p-nav-menu">
                <NavLink to="/"><p className="p-nav-menu_item">Accueil</p></NavLink>
                <NavLink to="/aPropos"><p className="p-nav-menu_item">A Propos</p></NavLink>
            </div>
        </nav>
    );
}

export default Nav;
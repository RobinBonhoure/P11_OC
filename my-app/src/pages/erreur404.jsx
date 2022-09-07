import React from "react";
import Nav from "../layouts/nav";
import { Link } from "react-router-dom";

function erreur404() {
    return (
        <>
            <Nav></Nav>
            <div className="erreur404">
                <h1 className="erreur404-titre">404</h1>
                <p className="erreur404-subTitle">Oups! La page que <br /> vous demandez n'existe pas.</p>
                <Link to="/">
                    <p className="erreur404-link">
                        Retourner sur la page d’accueil
                    </p>
                </Link>
            </div>
        </>
    );
}

export default erreur404;
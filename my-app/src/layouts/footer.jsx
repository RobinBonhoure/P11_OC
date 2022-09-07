import React from "react";
// import { Link } from "react-router-dom";

import logoFooter from "../img/logo-footer.svg";


function Footer() {
    return (
        <footer className="p-footer">
            <img src={logoFooter} alt="" />
            <p className="p-footer-copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
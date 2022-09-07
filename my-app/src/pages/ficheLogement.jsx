import React from "react";
import Header from "../layouts/header";
import Nav from "../layouts/nav";
import headerImg from "../img/header-a-propos.png";
import headerImgMobile from "../img/header-a-propos-mobile.png";

// VARIABLES
var page_title = "Fiche logement";

function FicheLogement() {
  return (
    <>
    <Nav></Nav>
    <div className="a-propos">
      <Header title={page_title} img={headerImg} imgMobile={headerImgMobile}></Header>
    </div>
    </>
  );
}

export default FicheLogement;

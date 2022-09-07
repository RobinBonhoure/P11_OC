import React from "react";
import Header from "../layouts/header";
import Nav from "../layouts/nav";
import headerImg from "../img/header.png";
import headerImgMobile from "../img/header-mobile.png";
import { data } from "../datastore/data.js"
import Card from "../components/card";

// JSON


// VARIABLES
var page_title = "Chez vous,\n partout et ailleurs";

function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="accueil">
        <Header title={page_title} img={headerImg} imgMobile={headerImgMobile}></Header>
        <div className="container">
          <div className="accueil-grille">
            {data.map((item, i) => <Card img={data[i].cover} title={data[i].title} id={data[i].id} key={i}></Card>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

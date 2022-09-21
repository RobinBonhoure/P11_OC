import React, { useState, useEffect } from "react";
import Nav from "../layouts/nav";
import Slider from "../components/slider";
import Tag from "../components/tag";
import DropdownSm from "../components/dropdownSm";

import { data } from "../datastore/data.js";
import { useParams, useNavigate } from "react-router-dom";

const starArray = [...Array(5).keys()].map(i => i + 1);

function FicheLogement() {

  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logementFound = data.find(logement => logement.id === id);
    if (logementFound) {
      setLogement(logementFound);
    } else {
      navigate("/erreur404");
    }
  },[id, navigate]);
  
  return (
    <div className="ficheLogement">
      {logement === null ? <p>loading...</p> :
        <div>
          <Nav></Nav>
          <Slider slides={logement.pictures}></Slider>
          <div className="ficheLogement-header">
            <div>
              <h1 className="ficheLogement-title">
                {logement.title}
              </h1>
              <h3 className="ficheLogement-subtitle">
                {logement.location}
              </h3>
              <div className="ficheLogement-tags">
                {logement.tags.map((item, i) => (
                  <Tag key={i} name={item}></Tag>
                ))}
              </div>
            </div>
            <div className="ficheLogement-header_right">
              <div className="ficheLogement-header_right_top">
                <p className="ficheLogement-name">
                  {logement.host.name}
                </p>
                <img src={logement.host.picture} alt="" />
              </div>
              <div className="ficheLogement-header_rate">
                {starArray.map((item, i) => (
                  <svg key={i} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={i <= logement.rating - 1 ? "#FF6060" : "#E3E3E3"} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="ficheLogement-dropdown">
            <DropdownSm title={'Description'} content={logement.description}></DropdownSm>
            <DropdownSm title={'Équipements'} content={
              logement.equipments.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            ></DropdownSm>
          </div>
        </div>}
    </div>
  );
}

export default FicheLogement;

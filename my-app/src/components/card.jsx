import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

    return (
        <Link to={`/ficheLogement?id=${props.id}`}>
            <div className="card">
                <div className="card-mask"></div>
                <img src={props.img} alt="" />
                <h2 className="card-titre">
                    {props.title}
                </h2>
            </div>
        </Link>
    );
}

export default Card;
import React from "react";
import { useState } from "react"
import arrow from "../img/arrow.svg"

function DropDownLg(props) {

    const [state, setState] = useState(false);

    const handleClick = event => {
        setState(current => !current);
    };

    return (
        <div className={state ? 'dropdown active' : 'dropdown'}>
            <div className="dropdown-header" onClick={handleClick}>
                <div className="dropdown-header_title">{props.title}</div>
                <div className="dropdown-header_arrow"><img src={arrow} alt="" /></div>
            </div>
            <div className="dropdown-content">
                {props.content}
            </div>
        </div>
    );
}

export default DropDownLg;
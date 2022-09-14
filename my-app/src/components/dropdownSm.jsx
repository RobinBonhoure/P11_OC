import React from "react";
import { useState } from "react"
import arrow from "../img/arrow.svg"

function DropdownSm(props) {

    const [state, setState] = useState(false);

    const handleClick = event => {
        setState(current => !current);
    };

    return (
        <div className={state ? 'dropdown dropdown-sm active' : 'dropdown dropdown-sm'}>
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

export default DropdownSm;
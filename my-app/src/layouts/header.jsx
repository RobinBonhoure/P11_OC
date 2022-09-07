import React from "react";

function Header(props) {

  return (
    <header className="p-header">
        <h1 className="p-header-titre">{props.title}</h1>
        <img className="hidden-mobile" src={props.img} alt="" />
        <img className="hidden-pc" src={props.imgMobile} alt="" />
    </header>
  );
}

export default Header;

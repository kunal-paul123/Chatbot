import React from "react";
import { Link } from "react-router-dom";

function NavigationLink(props) {
  return (
    <Link
    className="nav-link"
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {props.text}
    </Link>
  );
}

export default NavigationLink;

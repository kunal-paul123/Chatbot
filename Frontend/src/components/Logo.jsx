import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link to="/">
        <img
          src="openai.png"
          alt="openai"
          width="30px"
          height="30px"
          className="image-inverted"
        />
      </Link>
    </div>
  );
}

export default Logo;

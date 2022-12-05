import React from "react";

import ButtonStyled from "../../components/ButtonStyled";
import { Link } from "react-router-dom";

export default function FamiliarLevel2() {
  return (
    <div className="container">
      <div className="custom-grid">
        <Link to="/familiarCard_page">
          <button className="back-card btn-styled ">
            <ButtonStyled btnName={"Back"} />
          </button>
        </Link>
      </div>
      <div className="familiar-card_grid"></div>
    </div>
  );
}

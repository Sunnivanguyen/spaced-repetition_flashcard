import React, { useContext } from "react";
import { Context } from "../../Context";
import ButtonStyled from "../../components/ButtonStyled";
import { Link } from "react-router-dom";

export default function FamiliarLevel1() {
  const { familiarLevelOneCards } = useContext(Context);
  console.log(familiarLevelOneCards);

  return (
    <div className="container">
      <div className="custom-grid">
        <Link to="/familiarCard_page">
          <button className="back-card btn-styled ">
            <ButtonStyled btnName={"Back"} />
          </button>
        </Link>
      </div>
      <div className="familiar-card_grid">
        {familiarLevelOneCards.map((card) => (
          <div>{card.question}</div>
        ))}
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonStyled from "../components/ButtonStyled";
import { Link } from "react-router-dom";
import FamiliarItems from "../components/FamiliarItems";
export default function FamiliarCardPage() {
  const { language } = useContext(Context);
  return (
    <div className="container">
      <div className="custom-grid">
        {language === "english" && (
          <Link to="/englishCard_page">
            <button className="back-card btn-styled ">
              <ButtonStyled btnName={"Back"} />
            </button>
          </Link>
        )}
        {language === "chinese" && (
          <Link to="/chineseCard_page">
            <button className="back-card btn-styled ">
              <ButtonStyled btnName={"Back"} />
            </button>
          </Link>
        )}
      </div>
      <div className="familiar-card_grid">
        <FamiliarItems />
      </div>
    </div>
  );
}

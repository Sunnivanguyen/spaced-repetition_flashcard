import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonStyled from "../components/ButtonStyled";
import { Link } from "react-router-dom";
import FamiliarPages from "../components/FamiliarPages";
export default function FamiliarCardPage() {
  const { language, darkMode } = useContext(Context);
  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="custom-grid">
        {language === "english" && (
          <Link to="/englishCard_page">
            <button className="back-card btn-styled ">
              <ButtonStyled btnName={"Back"} darkMode={darkMode} />
            </button>
          </Link>
        )}
        {language === "chinese" && (
          <Link to="/chineseCard_page">
            <button className="back-card btn-styled ">
              <ButtonStyled btnName={"Back"} darkMode={darkMode} />
            </button>
          </Link>
        )}
      </div>
      <div className={`familiar-card_grid  ${darkMode ? "dark" : ""}`}>
        <FamiliarPages />
      </div>
    </div>
  );
}

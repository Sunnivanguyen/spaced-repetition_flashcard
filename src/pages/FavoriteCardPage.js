import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonStyled from "../components/ButtonStyled";
import FavoritedItems from "../components/FavoritedItems";
import { Link } from "react-router-dom";

export default function FavoriteCardPage() {
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
      <div className={`card-grid ${darkMode ? "dark" : ""}`}>
        <FavoritedItems />
      </div>
    </div>
  );
}

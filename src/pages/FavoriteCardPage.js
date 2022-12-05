import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonStyled from "../components/ButtonStyled";
import FavoritedItems from "../components/FavoritedItems";
import { Link } from "react-router-dom";

export default function FavoriteCardPage() {
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
      <div className="card-grid">
        <FavoritedItems />
      </div>
    </div>
  );
}

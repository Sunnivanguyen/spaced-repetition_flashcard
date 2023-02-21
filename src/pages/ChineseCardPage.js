import React, { useContext } from "react";
import CardItems from "../components/CardItems";
import NewChineseCard from "../components/NewChineseCard";
import { Context } from "../Context";
import ButtonStyled from "../components/ButtonStyled";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import FavoriteButtonStyles from "../components/FavoriteButtonStyles";
import FamiliarButtonStyles from "../components/FamiliarButtonStyles";

export default function ChineseCardPage() {
  const {
    language,
    isCreated,
    chineseCards,
    currentChineseCard,
    createNewChineseCard,
    darkMode,
  } = useContext(Context);
  console.log(currentChineseCard);
  return (
    <>
      {!language ? (
        <HomePage />
      ) : chineseCards.length > 0 ? (
        <div className={`container ${darkMode ? "dark" : ""}`}>
          <div className="custom-grid">
            <button
              className="new-flashcard-btn btn-styled"
              onClick={createNewChineseCard}
            >
              <ButtonStyled btnName={"Create A New Card"} darkMode={darkMode} />
            </button>
            <div className="special-btn-box">
              <Link to="/favoriteCard_page">
                <button className="favorite-items-btn btn-styled">
                  <FavoriteButtonStyles darkMode={darkMode} />
                </button>
              </Link>
              <Link to="/familiarCard_page">
                <button className="familiar-items-btn btn-styled">
                  <FamiliarButtonStyles darkMode={darkMode} />
                </button>
              </Link>
            </div>
          </div>
          <div className={`card-grid ${darkMode ? "dark" : ""}`}>
            <CardItems />
          </div>
          {isCreated && <NewChineseCard />}
        </div>
      ) : (
        <div className={`first-card_container ${darkMode ? "dark" : ""}`}>
          <button
            className="first-flashcard-btn"
            onClick={createNewChineseCard}
          >
            <ButtonStyled btnName={"Create A New Card"} darkMode={darkMode} />
          </button>
          {isCreated && <NewChineseCard />}
        </div>
      )}
    </>
  );
}

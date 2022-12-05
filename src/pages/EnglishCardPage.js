import React, { useContext } from "react";
import CardItems from "../components/CardItems";
import NewEnglishCard from "../components/NewEnglishCard";
import { Context } from "../Context";
import ButtonStyled from "../components/ButtonStyled";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import FavoriteButtonStyles from "../components/FavoriteButtonStyles";
import FamiliarButtonStyles from "../components/FamiliarButtonStyles";

export default function EnglishCardPage() {
  const {
    language,
    isCreated,
    currentEnglishCard,
    englishCards,
    createNewEnglishCard,
  } = useContext(Context);

  console.log(currentEnglishCard);

  return (
    <>
      {!language ? (
        <HomePage />
      ) : englishCards.length > 0 ? (
        <div className="container">
          <div className="custom-grid">
            <button
              className="new-flashcard-btn btn-styled"
              onClick={createNewEnglishCard}
            >
              <ButtonStyled btnName={"Create A New Card"} />
            </button>
            <div className="special-btn-box">
              <Link to="/favoriteCard_page">
                <button className="favorite-items-btn btn-styled">
                  <FavoriteButtonStyles />
                </button>
              </Link>
              <Link to="/familiarCard_page">
                <button className="familiar-items-btn btn-styled">
                  <FamiliarButtonStyles />
                </button>
              </Link>
            </div>
          </div>
          <div className="card-grid">
            <CardItems />
          </div>
          {isCreated && <NewEnglishCard />}
        </div>
      ) : (
        <div className="first-card_container">
          <button
            className="first-flashcard-btn"
            onClick={createNewEnglishCard}
          >
            <ButtonStyled btnName={"Create A New Card"} />
          </button>
          {isCreated && <NewEnglishCard />}
        </div>
      )}
    </>
  );
}

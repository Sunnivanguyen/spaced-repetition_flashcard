import React, { useContext } from "react";
import { Context } from "../../Context";
import ButtonStyled from "../../components/ButtonStyled";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import ReviewCard from "../../components/ReviewCard";
import EditEnglishCard from "../../components/EditEnglishCard";
import EditChineseCard from "../../components/EditChineseCard";

export default function FamiliarLevel3Items({
  toDefaultFamiliarLevel,
  deleteLeftOver,
}) {
  const {
    language,
    familiarLevelThreeEnglishCards,
    setFamiliarLevelThreeEnglishCards,
    familiarLevelThreeChineseCards,
    setFamiliarLevelThreeChineseCards,
    isReviewed,
    isEdited,
    reviewCard,
    setIsEdited,
  } = useContext(Context);

  function deleteFamiliarCard(event, cardId) {
    event.stopPropagation();
    if (language === "english") {
      setFamiliarLevelThreeEnglishCards((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
    } else if (language === "chinese") {
      setFamiliarLevelThreeChineseCards((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
    }
    toDefaultFamiliarLevel(cardId);
    deleteLeftOver();
  }
  return (
    <div className="container">
      <div className="custom-grid">
        <Link to="/familiarCard_page">
          <button className="back-card btn-styled">
            <ButtonStyled btnName={"Back"} />
          </button>
        </Link>
      </div>
      <div className="familiar-card_grid">
        {language === "english" &&
          familiarLevelThreeEnglishCards.map((item) => (
            <div key={nanoid()} className="card">
              <div
                className={`card-item ${item.type}`}
                onClick={(e) => reviewCard(e, item.id)}
              >
                <i
                  className="ri-edit-2-line ri-lg"
                  onClick={() => setIsEdited(!isEdited)}
                ></i>
                <i
                  className="ri-delete-bin-6-line ri-lg"
                  onClick={(event) => deleteFamiliarCard(event, item.id)}
                ></i>
                <div className="card-body">{item.question}</div>
              </div>
              {isReviewed && <ReviewCard item={item} />}
              {isEdited && <EditEnglishCard />}
            </div>
          ))}
        {language === "chinese" &&
          familiarLevelThreeChineseCards.map((item) => (
            <div key={nanoid()} className="card">
              <div
                className={`card-item ${item.type}`}
                onClick={(e) => reviewCard(e, item.id)}
              >
                <i
                  className="ri-edit-2-line ri-lg"
                  onClick={() => setIsEdited(!isEdited)}
                ></i>
                <i
                  className="ri-delete-bin-6-line ri-lg"
                  onClick={(event) => deleteFamiliarCard(event, item.id)}
                ></i>
                <div className="card-body">{item.question}</div>
              </div>
              {isReviewed && <ReviewCard item={item} />}
              {isEdited && <EditChineseCard />}
            </div>
          ))}
      </div>
    </div>
  );
}

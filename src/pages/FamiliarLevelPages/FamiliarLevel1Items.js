import React, { useContext } from "react";
import { Context } from "../../Context";
import ButtonStyled from "../../components/ButtonStyled";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import ReviewCard from "../../components/ReviewCard";
import EditEnglishCard from "../../components/EditEnglishCard";
import EditChineseCard from "../../components/EditChineseCard";

export default function FamiliarLevel1Items() {
  const {
    language,
    familiarLevelOneCards,
    setFamiliarLevelOneCards,
    isReviewed,
    isEdited,
    setIsEdited,
    reviewCard,
  } = useContext(Context);

  function deleteFamiliarCard(event, cardId) {
    event.stopPropagation();
    setFamiliarLevelOneCards((oldCards) =>
      oldCards.filter((card) => card.id !== cardId)
    );
  }

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
        {familiarLevelOneCards.map((item) => (
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
            {isEdited && language === "english" && <EditEnglishCard />}
            {isEdited && language === "chinese" && <EditChineseCard />}
          </div>
        ))}
      </div>
    </div>
  );
}

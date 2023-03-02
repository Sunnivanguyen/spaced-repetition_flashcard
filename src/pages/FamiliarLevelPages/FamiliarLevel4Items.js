import React, { useContext } from "react";
import { Context } from "../../Context";
import parse from "html-react-parser";
import ButtonStyled from "../../components/ButtonStyled";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import ReviewCard from "../../components/ReviewCard";
import EditEnglishCard from "../../components/EditEnglishCard";
import EditChineseCard from "../../components/EditChineseCard";

export default function FamiliarLevel4Items({
  toDefaultFamiliarLevel,
  deleteLeftOver,
}) {
  const {
    language,
    familiarLevelFourEnglishCards,
    setFamiliarLevelFourEnglishCards,
    familiarLevelFourChineseCards,
    setFamiliarLevelFourChineseCards,
    isReviewed,
    isEdited,
    reviewCard,
    editCard,
    darkMode,
  } = useContext(Context);

  function deleteFamiliarLevelFourCard(event, cardId) {
    event.stopPropagation(cardId);

    if (language === "english") {
      setFamiliarLevelFourEnglishCards((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
    } else if (language === "chinese") {
      setFamiliarLevelFourChineseCards((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
    }
    toDefaultFamiliarLevel(cardId);
    deleteLeftOver();
  }

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="custom-grid">
        <Link to="/familiarCard_page">
          <button className="back-card btn-styled ">
            <ButtonStyled btnName={"Back"} darkMode={darkMode} />
          </button>
        </Link>
      </div>
      <div className={`card-grid ${darkMode ? "dark" : ""}`}>
        {language === "english" &&
          familiarLevelFourEnglishCards.map((item) => (
            <div key={nanoid()} className="card">
              <div
                className={`card-item ${item.type} ${darkMode ? "dark" : ""}`}
                onClick={(e) => reviewCard(e, item.id)}
              >
                <i
                  className={`ri-edit-2-line ri-lg ${darkMode ? "dark" : ""}`}
                  onClick={(event) => editCard(event, item.id)}
                ></i>
                <i
                  className={`ri-delete-bin-6-line ri-lg ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={(event) =>
                    deleteFamiliarLevelFourCard(event, item.id)
                  }
                ></i>
                <div className="card-body">{parse(item.question)}</div>
              </div>
              {isReviewed && <ReviewCard item={item} />}
              {isEdited && <EditEnglishCard />}
            </div>
          ))}
        {language === "chinese" &&
          familiarLevelFourChineseCards.map((item) => (
            <div key={nanoid()} className="card">
              <div
                className={`card-item ${item.type} ${darkMode ? "dark" : ""}`}
                onClick={(e) => reviewCard(e, item.id)}
              >
                <i
                  className={`ri-edit-2-line ri-lg ${darkMode ? "dark" : ""}`}
                  onClick={(event) => editCard(event, item.id)}
                ></i>
                <i
                  className={`ri-delete-bin-6-line ri-lg ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={(event) =>
                    deleteFamiliarLevelFourCard(event, item.id)
                  }
                ></i>
                <div className="card-body">{parse(item.question)}</div>
              </div>
              {isReviewed && <ReviewCard item={item} />}
              {isEdited && <EditChineseCard />}
            </div>
          ))}
      </div>
    </div>
  );
}

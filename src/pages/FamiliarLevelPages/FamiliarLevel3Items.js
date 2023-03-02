import React, { useContext } from "react";
import { Context } from "../../Context";
import parse from "html-react-parser";
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
    editCard,
    darkMode,
  } = useContext(Context);

  function deleteFamiliarLevelThreeCard(event, cardId) {
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
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="custom-grid">
        <Link to="/familiarCard_page">
          <button className="back-card btn-styled">
            <ButtonStyled btnName={"Back"} darkMode={darkMode} />
          </button>
        </Link>
      </div>
      <div className={`card-grid ${darkMode ? "dark" : ""}`}>
        {language === "english" &&
          familiarLevelThreeEnglishCards.map((item) => (
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
                    deleteFamiliarLevelThreeCard(event, item.id)
                  }
                ></i>
                <div className="card-body">{parse(item.question)}</div>
              </div>
              {isReviewed && <ReviewCard item={item} />}
              {isEdited && <EditEnglishCard />}
            </div>
          ))}
        {language === "chinese" &&
          familiarLevelThreeChineseCards.map((item) => (
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
                    deleteFamiliarLevelThreeCard(event, item.id)
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

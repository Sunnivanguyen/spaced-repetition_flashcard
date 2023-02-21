import React, { useContext } from "react";
import parse from "html-react-parser";
import { Context } from "../Context";
import EditEnglishCard from "./EditEnglishCard";
import EditChineseCard from "./EditChineseCard";
import ReviewCard from "./ReviewCard";

export default function CardItems() {
  const {
    language,
    isEdited,
    isReviewed,
    currentEnglishCardId,
    currentChineseCardId,
    englishCards,
    chineseCards,
    reviewCard,
    editCard,
    deleteCard,
    toggleEnglishFavorite,
    toggleChineseFavorite,
    darkMode,
  } = useContext(Context);

  return (
    <>
      {language === "english" &&
        englishCards.map((item) => (
          <div
            className={`card ${
              item.id === currentEnglishCardId ? "selected-card" : ""
            }`}
            key={item.id}
          >
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
                onClick={(event) => deleteCard(event, item.id)}
              ></i>
              <div className="card-body">{parse(item.question)}</div>
              {item.isFavorited ? (
                <i
                  className={`ri-heart-3-fill ri-lg heart-icon ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={(e) => toggleEnglishFavorite(e, item)}
                ></i>
              ) : (
                <i
                  className={`ri-heart-3-line ri-lg heart-icon heart-icon ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={(e) => toggleEnglishFavorite(e, item)}
                ></i>
              )}
            </div>
            {isReviewed && <ReviewCard item={item} />}
            {isEdited && <EditEnglishCard />}
          </div>
        ))}
      {language === "chinese" &&
        chineseCards.map((item) => (
          <div
            className={`card ${
              item.id === currentChineseCardId ? "selected-card" : ""
            }`}
            key={item.id}
          >
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
                onClick={(event) => deleteCard(event, item.id)}
              ></i>
              <div className="card-body">{parse(item.question)}</div>
              {item.isFavorited ? (
                <i
                  className={`ri-heart-3-fill ri-lg heart-icon ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={(e) => toggleChineseFavorite(e, item)}
                ></i>
              ) : (
                <i
                  className={`ri-heart-3-line ri-lg heart-icon heart-icon ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={(e) => toggleChineseFavorite(e, item)}
                ></i>
              )}
            </div>
            {isReviewed && <ReviewCard item={item} />}
            {isEdited && <EditChineseCard />}
          </div>
        ))}
    </>
  );
}

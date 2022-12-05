import React, { useContext } from "react";
import { Context } from "../Context";
import ReviewCard from "./ReviewCard";
import EditEnglishCard from "./EditEnglishCard";
import EditChineseCard from "./EditChineseCard";

export default function FavoritedItems() {
  const {
    language,
    isEdited,
    isReviewed,
    currentChineseCardId,
    currentEnglishCardId,
    reviewCard,
    editCard,
    englishCards,
    setEnglishCards,
    chineseCards,
    setChineseCards,
    favoriteEnglishItems,
    favoriteChineseItems,
    setFavoriteEnglishItems,
    setFavoriteChineseItems,
  } = useContext(Context);

  function deleteFavoriteCard(event, cardId) {
    event.stopPropagation();
    if (language === "english") {
      setFavoriteEnglishItems((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
      const updateArr = englishCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, isFavorited: false };
        }
        return card;
      });
      setEnglishCards(updateArr);
    } else if (language === "chinese") {
      setFavoriteChineseItems((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
      const updateArr = chineseCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, isFavorited: false };
        }
        return card;
      });
      setChineseCards(updateArr);
    }
  }

  return (
    <>
      {language === "english" &&
        favoriteEnglishItems.map((item) => (
          <div
            className={`card ${
              item.id === currentEnglishCardId ? "selected-card" : ""
            }`}
            key={item.id}
          >
            <div
              className={`card-item ${item.type}`}
              onClick={(e) => reviewCard(e, item.id)}
            >
              <i
                className="ri-edit-2-line ri-lg"
                onClick={(event) => editCard(event, item.id)}
              ></i>
              <i
                className="ri-delete-bin-6-line ri-lg"
                onClick={(event) => deleteFavoriteCard(event, item.id)}
              ></i>
              <div className="card-body">{item.question}</div>
            </div>
            {isReviewed && <ReviewCard item={item} />}
            {isEdited && <EditEnglishCard />}
          </div>
        ))}
      {language === "chinese" &&
        favoriteChineseItems.map((item) => (
          <div
            className={`card ${
              item.id === currentChineseCardId ? "selected-card" : ""
            }`}
            key={item.id}
          >
            <div
              className={`card-item ${item.type}`}
              onClick={(e) => reviewCard(e, item.id)}
            >
              <i
                className="ri-edit-2-line ri-lg"
                onClick={(event) => editCard(event, item.id)}
              ></i>
              <i
                className="ri-delete-bin-6-line ri-lg"
                onClick={(event) => deleteFavoriteCard(event, item.id)}
              ></i>
              <div className="card-body">{item.question}</div>
            </div>
            {isReviewed && <ReviewCard item={item} />}
            {isEdited && <EditChineseCard />}
          </div>
        ))}
    </>
  );
}

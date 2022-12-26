import React, { useContext, useEffect } from "react";
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
    updatedQuestion,
    updatedAnswer,
    favoriteEnglishItems,
    favoriteChineseItems,
    setFavoriteEnglishItems,
    setFavoriteChineseItems,
    currentCard,
  } = useContext(Context);

  useEffect(() => {
    if (language === "english") {
      setFavoriteEnglishItems((oldCards) =>
        oldCards.map((oldCard) =>
          oldCard.id === currentCard.id
            ? {
                ...oldCard,
                question: currentCard.question,
                answer: currentCard.answer,
              }
            : oldCard
        )
      );
    } else if (language === "chinese") {
      setFavoriteChineseItems((oldCards) =>
        oldCards.map((oldCard) =>
          oldCard.id === currentCard.id
            ? {
                ...oldCard,
                question: currentCard.question,
                answer: currentCard.answer,
              }
            : oldCard
        )
      );
    }
  }, [
    currentCard,
    updatedQuestion,
    updatedAnswer,
    setFavoriteChineseItems,
    setFavoriteEnglishItems,
    language,
  ]);

  function editFavoriteCard(event, cardId) {
    event.stopPropagation();
    editCard(event, cardId);
    if (language === "english") {
      setFavoriteEnglishItems((oldCards) =>
        oldCards.map((oldCard) =>
          oldCard.id === cardId
            ? {
                ...oldCard,
                question: currentCard.question,
                answer: currentCard.answer,
              }
            : oldCard
        )
      );
    } else if (language === "chinese") {
      setFavoriteChineseItems((oldCards) =>
        oldCards.map((oldCard) =>
          oldCard.id === cardId
            ? {
                ...oldCard,
                question: currentCard.question,
                answer: currentCard.answer,
              }
            : oldCard
        )
      );
    }
    console.log(updatedQuestion);
  }

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
            key={`${item.id}_favorite`}
          >
            <div
              className={`card-item ${item.type}`}
              onClick={(e) => reviewCard(e, item.id)}
            >
              <i
                className="ri-edit-2-line ri-lg"
                onClick={(event) => editFavoriteCard(event, item.id)}
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
            key={`${item.id}_favorite`}
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

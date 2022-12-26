import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
const Context = React.createContext();

function ContextProvider(props) {
  const [language, setLanguage] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);
  const [toAnswer, setToAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [cardId, setCardId] = useState("");
  const [updatedAnswer, setUpdatedAnswer] = useState("");
  const [updatedQuestion, setUpdatedQuestion] = useState("");

  useEffect(() => {
    setLanguage(false);
  }, []);

  const [englishCards, setEnglishCards] = useState(
    JSON.parse(localStorage.getItem("english_cards")) || []
  );
  const [currentEnglishCardId, setCurrentEnglishCardId] = useState(
    (englishCards[0] && englishCards[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("english_cards", JSON.stringify(englishCards));
  }, [englishCards]);

  function createNewEnglishCard() {
    setIsCreated(true);
    setCardId(nanoid());
    setQuestion("");
    setAnswer("");
    setCurrentEnglishCardId(cardId);
  }

  function createEnglishCard() {
    setIsCreated(false);
    const newEnglishCard = {
      id: cardId,
      type: "english_card",
      question: question,
      answer: answer,
      isFavorited: false,
      familiar: 0,
    };
    setEnglishCards((oldCards) => [newEnglishCard, ...oldCards]);
    setCurrentEnglishCardId(newEnglishCard.id);
    console.log(englishCards);
  }

  function findCurrentEnglishCard() {
    return englishCards.find((card) => {
      return card.id === currentEnglishCardId;
    });
  }

  const currentEnglishCard = findCurrentEnglishCard();

  const [chineseCards, setChineseCards] = useState(
    JSON.parse(localStorage.getItem("chinese_cards")) || []
  );
  const [currentChineseCardId, setCurrentChineseCardId] = useState(
    (chineseCards[0] && chineseCards[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("chinese_cards", JSON.stringify(chineseCards));
  }, [chineseCards]);

  function createNewChineseCard() {
    setIsCreated(true);
    setCardId(nanoid());
    setQuestion("");
    setAnswer("");
    setCurrentChineseCardId(cardId);
  }

  function createChineseCard() {
    setIsCreated(false);
    const newChineseCard = {
      id: cardId,
      type: "chinese_card",
      question: question,
      answer: answer,
      isFavorited: false,
      familiar: 0,
    };
    setChineseCards((oldCards) => [newChineseCard, ...oldCards]);
    setCurrentChineseCardId(newChineseCard.id);
    console.log(chineseCards);
  }

  function findCurrentChineseCard() {
    return chineseCards.find((card) => {
      return card.id === currentChineseCardId;
    });
  }
  const currentChineseCard = findCurrentChineseCard();

  function reviewCard(event, cardId) {
    event.stopPropagation();
    setIsReviewed(true);
    if (language === "english") {
      setCurrentEnglishCardId(cardId);
    } else if (language === "chinese") {
      setCurrentChineseCardId(cardId);
    }
  }
  function editCard(event, cardId) {
    event.stopPropagation();
    setIsEdited(true);
    setToAnswer(false);
    if (language === "english") {
      setCurrentEnglishCardId(cardId);
    } else if (language === "chinese") {
      setCurrentChineseCardId(cardId);
    }
  }

  function deleteCard(event, cardId) {
    event.stopPropagation();

    if (language === "english") {
      setEnglishCards((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
      const favorited = favoriteEnglishItems.some(
        (element) => element.id === cardId
      );
      if (favorited) {
        setFavoriteEnglishItems((oldCards) =>
          oldCards.filter((card) => card.id !== cardId)
        );
      }
    } else if (language === "chinese") {
      setChineseCards((oldCards) =>
        oldCards.filter((card) => card.id !== cardId)
      );
      const favorited = favoriteChineseItems.some(
        (element) => element.id === cardId
      );
      if (favorited) {
        setFavoriteChineseItems((oldCards) =>
          oldCards.filter((card) => card.id !== cardId)
        );
      }
    }
  }

  function findCurrentCard() {
    if (language === "english") {
      return currentEnglishCard;
    } else if (language === "chinese") {
      return currentChineseCard;
    }
  }

  const currentCard = findCurrentCard();

  const [favoriteEnglishItems, setFavoriteEnglishItems] = useState(
    JSON.parse(localStorage.getItem("english_favorite")) || []
  );

  const [favoriteChineseItems, setFavoriteChineseItems] = useState(
    JSON.parse(localStorage.getItem("chinese_favorite")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "english_favorite",
      JSON.stringify(favoriteEnglishItems)
    );
    localStorage.setItem(
      "chinese_favorite",
      JSON.stringify(favoriteChineseItems)
    );
  }, [favoriteEnglishItems, favoriteChineseItems]);

  function addToEnglishFavoriteItems(cardId) {
    englishCards.map((card) => {
      if (card.id === cardId) {
        setFavoriteEnglishItems((oldCards) => [card, ...oldCards]);
      }
      return favoriteEnglishItems;
    });
  }

  function toggleEnglishFavorite(e, item) {
    e.stopPropagation();
    setCurrentEnglishCardId(item.id);

    const updateArr = englishCards.map((card) => {
      if (card.id === item.id) {
        return { ...card, isFavorited: !card.isFavorited };
      }
      return card;
    });
    setEnglishCards(updateArr);
    const favorited = favoriteEnglishItems.some(
      (element) => element.id === item.id
    );
    console.log(favorited);
    for (let i = 0; i < englishCards.length; i++) {
      const card = englishCards[i];
      if (!favorited && card.id === item.id && !card.isFavorited) {
        addToEnglishFavoriteItems(item.id);
      } else if (favorited && card.isFavorited) {
        setFavoriteEnglishItems((oldItems) =>
          oldItems.filter((item) => item.id !== card.id)
        );
      }
    }
    console.log(favoriteEnglishItems);
  }

  function addToChineseFavoriteItems(cardId) {
    chineseCards.map((card) => {
      if (card.id === cardId) {
        setFavoriteChineseItems((oldCards) => [card, ...oldCards]);
      }
      return favoriteChineseItems;
    });
  }

  function toggleChineseFavorite(e, item) {
    e.stopPropagation();
    setCurrentChineseCardId(item.id);

    const updateArr = chineseCards.map((card) => {
      if (card.id === item.id) {
        return { ...card, isFavorited: !card.isFavorited };
      }
      return card;
    });
    setChineseCards(updateArr);
    const favorited = favoriteChineseItems.some(
      (element) => element.id === item.id
    );

    for (let i = 0; i < chineseCards.length; i++) {
      const card = chineseCards[i];
      if (!favorited && card.id === item.id && !card.isFavorited) {
        addToChineseFavoriteItems(item.id);
      } else if (favorited && card.isFavorited) {
        setFavoriteChineseItems((oldItems) =>
          oldItems.filter((item) => item.id !== card.id)
        );
      }
    }
  }

  const [familiarLevelOneCards, setFamiliarLevelOneCards] = useState(
    JSON.parse(localStorage.getItem("familiar_one")) || []
  );

  const [familiarLevelTwoCards, setFamiliarLevelTwoCards] = useState(
    JSON.parse(localStorage.getItem("familiar_two")) || []
  );

  const [familiarLevelThreeCards, setFamiliarLevelThreeCards] = useState(
    JSON.parse(localStorage.getItem("familiar_three")) || []
  );

  const [familiarLevelFourCards, setFamiliarLevelFourCards] = useState(
    JSON.parse(localStorage.getItem("familiar_four")) || []
  );

  const [familiarLevelFiveCards, setFamiliarLevelFiveCards] = useState(
    JSON.parse(localStorage.getItem("familiar_five")) || []
  );

  useEffect(() => {
    localStorage.setItem("familiar_one", JSON.stringify(familiarLevelOneCards));
    localStorage.setItem("familiar_two", JSON.stringify(familiarLevelTwoCards));
    localStorage.setItem(
      "familiar_three",
      JSON.stringify(familiarLevelThreeCards)
    );
    localStorage.setItem(
      "familiar_four",
      JSON.stringify(familiarLevelFourCards)
    );
    localStorage.setItem(
      "familiar_five",
      JSON.stringify(familiarLevelFiveCards)
    );
  }, [
    familiarLevelOneCards,
    familiarLevelTwoCards,
    familiarLevelThreeCards,
    familiarLevelFourCards,
    familiarLevelFiveCards,
  ]);

  useEffect(() => {
    if (document.getElementById("backdrop_review-card")) {
      document.getElementById("backdrop_review-card").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("1");
        },
        false
      );
    }
    if (document.getElementById("popup_review-card")) {
      document.getElementById("popup_review-card").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("2");
        },
        false
      );
    }
    if (document.getElementById("backdrop_edit-englishCard")) {
      document.getElementById("backdrop_edit-englishCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("3");
        },
        false
      );
    }
    if (document.getElementById("popup_edit-englishCard")) {
      document.getElementById("popup_edit-englishCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("4");
        },
        false
      );
    }
    if (document.getElementById("backdrop_edit-chineseCard")) {
      document.getElementById("backdrop_edit-chineseCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation("5");
        },
        false
      );
    }
    if (document.getElementById("popup_edit-chineseCard")) {
      document.getElementById("popup_edit-chineseCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation("6");
        },
        false
      );
    }
    if (document.getElementById("backdrop_create-englishCard")) {
      document.getElementById("backdrop_create-englishCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("7");
        },
        false
      );
    }
    if (document.getElementById("popup_create-englishCard")) {
      document.getElementById("popup_create-englishCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("8");
        },
        false
      );
    }
    if (document.getElementById("backdrop_create-chineseCard")) {
      document.getElementById("backdrop_create-chineseCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("9");
        },
        false
      );
    }
    if (document.getElementById("popup_create-chineseCard")) {
      document.getElementById("popup_create-chineseCard").addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          console.log("10");
        },
        false
      );
    }
  }, []);

  return (
    <Context.Provider
      value={{
        language,
        setLanguage,
        isCreated,
        setIsCreated,
        isEdited,
        setIsEdited,
        isReviewed,
        setIsReviewed,
        toAnswer,
        setToAnswer,
        answer,
        setAnswer,
        question,
        setQuestion,
        cardId,
        setCardId,
        updatedAnswer,
        setUpdatedAnswer,
        updatedQuestion,
        setUpdatedQuestion,
        englishCards,
        setEnglishCards,
        currentEnglishCardId,
        setCurrentEnglishCardId,
        createNewEnglishCard,
        createEnglishCard,
        currentEnglishCard,
        chineseCards,
        setChineseCards,
        currentChineseCardId,
        setCurrentChineseCardId,
        createNewChineseCard,
        currentChineseCard,
        createChineseCard,
        favoriteEnglishItems,
        favoriteChineseItems,
        setFavoriteEnglishItems,
        setFavoriteChineseItems,
        reviewCard,
        editCard,
        deleteCard,
        currentCard,
        toggleEnglishFavorite,
        toggleChineseFavorite,
        familiarLevelOneCards,
        setFamiliarLevelOneCards,
        familiarLevelTwoCards,
        setFamiliarLevelTwoCards,
        familiarLevelThreeCards,
        setFamiliarLevelThreeCards,
        familiarLevelFourCards,
        setFamiliarLevelFourCards,
        familiarLevelFiveCards,
        setFamiliarLevelFiveCards,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

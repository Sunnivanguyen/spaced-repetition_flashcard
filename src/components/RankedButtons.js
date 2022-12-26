import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonStyled from "./ButtonStyled";

export default function RankedButtons({ item }) {
  const {
    language,
    englishCards,
    setEnglishCards,
    chineseCards,
    setChineseCards,
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
    currentCard,
  } = useContext(Context);

  function getLevel() {
    if (language === "english") {
      for (let i = 0; i < englishCards.length; i++) {
        const card = englishCards[i];
        if (card.familiar === 1) {
          setFamiliarLevelOneCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 2) {
          setFamiliarLevelTwoCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 3) {
          setFamiliarLevelThreeCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 4) {
          setFamiliarLevelFourCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 5) {
          setFamiliarLevelFiveCards((oldCards) => [card, ...oldCards]);
        }
      }
    } else if (language === "chinese") {
      for (let i = 0; i < chineseCards.length; i++) {
        const card = englishCards[i];
        if (card.familiar === 1) {
          setFamiliarLevelOneCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 2) {
          setFamiliarLevelTwoCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 3) {
          setFamiliarLevelThreeCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 4) {
          setFamiliarLevelFourCards((oldCards) => [card, ...oldCards]);
        } else if (card.familiar === 5) {
          setFamiliarLevelFiveCards((oldCards) => [card, ...oldCards]);
        }
      }
    }
  }

  function setFamiliarLevels(e, num) {
    e.stopPropagation();
    if (language === "english") {
      const updateArr = englishCards.map((card) => {
        if (card.id === currentCard.id) {
          return { ...card, familiar: num };
        }
        return card;
      });
      setEnglishCards(updateArr);
      getLevel();
    } else if (language === "chinese") {
      const updateArr = chineseCards.map((card) => {
        if (card.id === currentCard.id) {
          return { ...card, familiar: num };
        }
        return card;
      });
      setChineseCards(updateArr);
      getLevel();
    }
    console.log(familiarLevelOneCards);
    console.log(familiarLevelTwoCards);
    console.log(familiarLevelThreeCards);
    console.log(familiarLevelFourCards);
    console.log(familiarLevelFiveCards);
  }

  const numArray = [1, 2, 3, 4, 5];

  return (
    <div className="ranked-box">
      {numArray.map((num) => {
        return (
          <button
            key={num}
            className="ranked-btn btn-styled"
            onClick={(e) => setFamiliarLevels(e, num)}
          >
            <ButtonStyled btnName={num} />
          </button>
        );
      })}
    </div>
  );
}

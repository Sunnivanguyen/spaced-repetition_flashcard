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
  } = useContext(Context);

  function getLevelOne() {
    if (language === "english") {
      englishCards.map((card) => {
        if (card.familiar === 1) {
          setFamiliarLevelOneCards((oldCards) => [card, ...oldCards]);
        }
        return familiarLevelOneCards;
      });
    } else if (language === "chinese") {
      chineseCards.map((card) => {
        if (card.familiar === 1) {
          setFamiliarLevelOneCards((oldCards) => [card, ...oldCards]);
        }
        return familiarLevelOneCards;
      });
    }
  }
  function setFamiliarLevels(e, num) {
    e.stopPropagation();
    if (language === "english") {
      const updateArr = englishCards.map((card) => {
        if (card.id === item.id) {
          return { ...card, familiar: num };
        }
        return card;
      });
      setEnglishCards(updateArr);

      getLevelOne();
    } else if (language === "chinese") {
      const updateArr = chineseCards.map((card) => {
        if (card.id === item.id) {
          return { ...card, familiar: num };
        }
        return card;
      });
      setChineseCards(updateArr);
      getLevelOne();
    }
    console.log(englishCards);
    console.log(chineseCards);
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

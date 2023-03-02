import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonStyled from "./ButtonStyled";

export default function RankedButtons() {
  const {
    language,
    englishCards,
    setEnglishCards,
    chineseCards,
    setChineseCards,
    currentCard,
    darkMode,
    getLevel,
  } = useContext(Context);

  function setFamiliarLevels(num) {
    if (language === "english") {
      const updateArr = englishCards.map((card) => {
        if (card.id === currentCard.id) {
          return { ...card, familiar: num };
        }
        return card;
      });
      setEnglishCards(updateArr);
      console.log(englishCards);
      getLevel();
    } else if (language === "chinese") {
      const updateArr = chineseCards.map((card) => {
        if (card.id === currentCard.id) {
          return { ...card, familiar: num };
        }
        return card;
      });
      setChineseCards(updateArr);
      console.log(chineseCards);
      getLevel();
    }
  }

  const numArray = [1, 2, 3, 4, 5];

  return (
    <div className="ranked-box">
      {numArray.map((num) => {
        return (
          <button
            key={num}
            className={`ranked-btn btn-styled ${darkMode ? "dark" : ""}`}
            onClick={() => setFamiliarLevels(num)}
          >
            <ButtonStyled btnName={num} darkMode={darkMode} />
          </button>
        );
      })}
    </div>
  );
}

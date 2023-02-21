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
    familiarLevelOneEnglishCards,
    setFamiliarLevelOneEnglishCards,
    familiarLevelTwoEnglishCards,
    setFamiliarLevelTwoEnglishCards,
    familiarLevelThreeEnglishCards,
    setFamiliarLevelThreeEnglishCards,
    familiarLevelFourEnglishCards,
    setFamiliarLevelFourEnglishCards,
    familiarLevelFiveEnglishCards,
    setFamiliarLevelFiveEnglishCards,
    familiarLevelOneChineseCards,
    setFamiliarLevelOneChineseCards,
    familiarLevelTwoChineseCards,
    setFamiliarLevelTwoChineseCards,
    familiarLevelThreeChineseCards,
    setFamiliarLevelThreeChineseCards,
    familiarLevelFourChineseCards,
    setFamiliarLevelFourChineseCards,
    familiarLevelFiveChineseCards,
    setFamiliarLevelFiveChineseCards,
    currentCard,
    darkMode,
  } = useContext(Context);

  function getLevel() {
    if (language === "english") {
      for (let i = 0; i < englishCards.length; i++) {
        const card = englishCards[i];
        if (card.familiar === 1) {
          const isFamiliar = familiarLevelOneEnglishCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelOneEnglishCards((oldCards) => [card, ...oldCards]);
          }
        } else if (card.familiar === 2) {
          const isFamiliar = familiarLevelTwoEnglishCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelTwoEnglishCards((oldCards) => [card, ...oldCards]);
          }
        } else if (card.familiar === 3) {
          const isFamiliar = familiarLevelThreeEnglishCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelThreeEnglishCards((oldCards) => [
              card,
              ...oldCards,
            ]);
          }
        } else if (card.familiar === 4) {
          const isFamiliar = familiarLevelFourEnglishCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelFourEnglishCards((oldCards) => [card, ...oldCards]);
          }
        } else if (card.familiar === 5) {
          const isFamiliar = familiarLevelFiveEnglishCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelFiveEnglishCards((oldCards) => [card, ...oldCards]);
          }
        }
      }
      console.log(familiarLevelOneEnglishCards);
    } else if (language === "chinese") {
      for (let i = 0; i < chineseCards.length; i++) {
        const card = chineseCards[i];
        if (card.familiar === 1) {
          const isFamiliar = familiarLevelOneChineseCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelOneChineseCards((oldCards) => [card, ...oldCards]);
          }
        } else if (card.familiar === 2) {
          const isFamiliar = familiarLevelTwoChineseCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelTwoChineseCards((oldCards) => [card, ...oldCards]);
          }
        } else if (card.familiar === 3) {
          const isFamiliar = familiarLevelThreeChineseCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelThreeChineseCards((oldCards) => [
              card,
              ...oldCards,
            ]);
          }
        } else if (card.familiar === 4) {
          const isFamiliar = familiarLevelFourChineseCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelFourChineseCards((oldCards) => [card, ...oldCards]);
          }
        } else if (card.familiar === 5) {
          const isFamiliar = familiarLevelFiveChineseCards.some(
            (element) => element.id === card.id
          );
          if (!isFamiliar) {
            setFamiliarLevelFiveChineseCards((oldCards) => [card, ...oldCards]);
          }
        }
      }
      console.log(familiarLevelOneChineseCards);
    }
  }

  function deleteLeftOver() {
    if (language === "english") {
      setFamiliarLevelOneEnglishCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 1)
      );
      setFamiliarLevelTwoEnglishCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 2)
      );
      setFamiliarLevelThreeEnglishCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 3)
      );
      setFamiliarLevelFourEnglishCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 4)
      );
      setFamiliarLevelFiveEnglishCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 5)
      );
      console.log(familiarLevelOneEnglishCards);
      console.log(familiarLevelTwoEnglishCards);
      console.log(familiarLevelThreeEnglishCards);
      console.log(familiarLevelFourEnglishCards);
      console.log(familiarLevelFiveEnglishCards);
    } else if (language === "chinese") {
      setFamiliarLevelOneChineseCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 1)
      );
      setFamiliarLevelTwoChineseCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 2)
      );
      setFamiliarLevelThreeChineseCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 3)
      );
      setFamiliarLevelFourChineseCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 4)
      );
      setFamiliarLevelFiveChineseCards((oldCards) =>
        oldCards.filter((card) => card.familiar === 5)
      );
      console.log(familiarLevelOneChineseCards);
      console.log(familiarLevelTwoChineseCards);
      console.log(familiarLevelThreeChineseCards);
      console.log(familiarLevelFourChineseCards);
      console.log(familiarLevelFiveChineseCards);
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
      console.log(englishCards);
      getLevel();
      deleteLeftOver();
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
      deleteLeftOver();
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
            onClick={(e) => setFamiliarLevels(e, num)}
          >
            <ButtonStyled btnName={num} darkMode={darkMode} />
          </button>
        );
      })}
    </div>
  );
}

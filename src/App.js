import React, { useContext, useEffect } from "react";
import { Context } from "../src/Context";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import EnglishCardPage from "./pages/EnglishCardPage";
import ChineseCardPage from "./pages/ChineseCardPage";
import FavoriteCardPage from "./pages/FavoriteCardPage";
import FamiliarCardPage from "./pages/FamiliarCardPage";
import FamiliarLevel1Items from "./pages/FamiliarLevelPages/FamiliarLevel1Items";
import FamiliarLevel2Items from "./pages/FamiliarLevelPages/FamiliarLevel2Items";
import FamiliarLevel3Items from "./pages/FamiliarLevelPages/FamiliarLevel3Items";
import FamiliarLevel4Items from "./pages/FamiliarLevelPages/FamiliarLevel4Items";
import FamiliarLevel5Items from "./pages/FamiliarLevelPages/FamiliarLevel5Items";

function App() {
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
  } = useContext(Context);
  const arr = [1, 2, 3, 4, 5];

  function toDefaultFamiliarLevel(cardId) {
    if (language === "english") {
      const updateArr = englishCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, familiar: 0 };
        }
        return card;
      });
      setEnglishCards(updateArr);
    } else if (language === "chinese") {
      const updateArr = chineseCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, familiar: 0 };
        }
        return card;
      });
      setChineseCards(updateArr);
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

  function getPageAdress(item) {
    if (item === 1) {
      return (
        <FamiliarLevel1Items
          toDefaultFamiliarLevel={toDefaultFamiliarLevel}
          deleteLeftOver={deleteLeftOver}
        />
      );
    } else if (item === 2) {
      return (
        <FamiliarLevel2Items
          toDefaultFamiliarLevel={toDefaultFamiliarLevel}
          deleteLeftOver={deleteLeftOver}
        />
      );
    } else if (item === 3) {
      return (
        <FamiliarLevel3Items
          toDefaultFamiliarLevel={toDefaultFamiliarLevel}
          deleteLeftOver={deleteLeftOver}
        />
      );
    } else if (item === 4) {
      return (
        <FamiliarLevel4Items
          toDefaultFamiliarLevel={toDefaultFamiliarLevel}
          deleteLeftOver={deleteLeftOver}
        />
      );
    } else if (item === 5) {
      return (
        <FamiliarLevel5Items
          toDefaultFamiliarLevel={toDefaultFamiliarLevel}
          deleteLeftOver={deleteLeftOver}
        />
      );
    }
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/favoriteCard_page" element={<FavoriteCardPage />} />
        <Route path="/familiarCard_page" element={<FamiliarCardPage />} />
        {arr.map((item) => (
          <Route
            path={`/familiarCards-level${item}_page`}
            key={`level${item}_page`}
            element={getPageAdress(item)}
          />
        ))}
        <Route path="/englishCard_page" element={<EnglishCardPage  />} />
        <Route path="/chineseCard_page" element={<ChineseCardPage />} />
      </Routes>
    </div>
  );
}

export default App;

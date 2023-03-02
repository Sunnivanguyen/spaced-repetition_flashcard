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
    setFamiliarLevelOneEnglishCards,
    setFamiliarLevelTwoEnglishCards,
    setFamiliarLevelThreeEnglishCards,
    setFamiliarLevelFourEnglishCards,
    setFamiliarLevelFiveEnglishCards,
    setFamiliarLevelOneChineseCards,
    setFamiliarLevelTwoChineseCards,
    setFamiliarLevelThreeChineseCards,
    setFamiliarLevelFourChineseCards,
    setFamiliarLevelFiveChineseCards,
    darkMode,
    getLevel,
  } = useContext(Context);

  useEffect(() => {
    getLevel();
  }, [getLevel]);

  function toDefaultFamiliarLevel(cardId) {
    if (language === "english") {
      const updateArr = englishCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, familiar: null };
        }
        return card;
      });
      setEnglishCards(updateArr);
    } else if (language === "chinese") {
      const updateArr = chineseCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, familiar: null };
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
    }
  }

  return (
    <div className={`background-color ${darkMode ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/favoriteCard_page" element={<FavoriteCardPage />} />
        <Route path="/familiarCard_page" element={<FamiliarCardPage />} />
        <Route
          path={`/familiarCards-level1_page`}
          key={`level1_page`}
          element={
            <FamiliarLevel1Items
              toDefaultFamiliarLevel={toDefaultFamiliarLevel}
              deleteLeftOver={deleteLeftOver}
            />
          }
        />
        <Route
          path={`/familiarCards-level2_page`}
          key={`level2_page`}
          element={
            <FamiliarLevel2Items
              toDefaultFamiliarLevel={toDefaultFamiliarLevel}
              deleteLeftOver={deleteLeftOver}
            />
          }
        />
        <Route
          path={`/familiarCards-level3_page`}
          key={`level3_page`}
          element={
            <FamiliarLevel3Items
              toDefaultFamiliarLevel={toDefaultFamiliarLevel}
              deleteLeftOver={deleteLeftOver}
            />
          }
        />
        <Route
          path={`/familiarCards-level4_page`}
          key={`level4_page`}
          element={
            <FamiliarLevel4Items
              toDefaultFamiliarLevel={toDefaultFamiliarLevel}
              deleteLeftOver={deleteLeftOver}
            />
          }
        />
        <Route
          path={`/familiarCards-level5_page`}
          key={`level5_page`}
          element={
            <FamiliarLevel5Items
              toDefaultFamiliarLevel={toDefaultFamiliarLevel}
              deleteLeftOver={deleteLeftOver}
            />
          }
        />
        <Route path="/englishCard_page" element={<EnglishCardPage />} />
        <Route path="/chineseCard_page" element={<ChineseCardPage />} />
      </Routes>
    </div>
  );
}

export default App;

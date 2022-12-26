import React from "react";

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
  const arr = [1, 2, 3, 4, 5];

  function getPageAdress(item) {
    if (item === 1) {
      return <FamiliarLevel1Items />;
    } else if (item === 2) {
      return <FamiliarLevel2Items />;
    } else if (item === 3) {
      return <FamiliarLevel3Items />;
    } else if (item === 4) {
      return <FamiliarLevel4Items />;
    } else if (item === 5) {
      return <FamiliarLevel5Items />;
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
            element={getPageAdress(item)}
          />
        ))}
        <Route path="/englishCard_page" element={<EnglishCardPage />} />
        <Route path="/chineseCard_page" element={<ChineseCardPage />} />
      </Routes>
    </div>
  );
}

export default App;

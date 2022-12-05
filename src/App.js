import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import EnglishCardPage from "./pages/EnglishCardPage";
import ChineseCardPage from "./pages/ChineseCardPage";
import FavoriteCardPage from "./pages/FavoriteCardPage";
import FamiliarCardPage from "./pages/FamiliarCardPage";
import FamiliarLevel1 from "./pages/FamiliarLevelPages/FamiliarLevel1";
import FamiliarLevel2 from "./pages/FamiliarLevelPages/FamiliarLevel2";
import FamiliarLevel3 from "./pages/FamiliarLevelPages/FamiliarLevel3";
import FamiliarLevel4 from "./pages/FamiliarLevelPages/FamiliarLevel4";
import FamiliarLevel5 from "./pages/FamiliarLevelPages/FamiliarLevel5";

function App() {
  const arr = [1, 2, 3, 4, 5];

  function getPageAdress(item) {
    if (item === 1) {
      return <FamiliarLevel1 />;
    } else if (item === 2) {
      return <FamiliarLevel2 />;
    } else if (item === 3) {
      return <FamiliarLevel3 />;
    } else if (item === 4) {
      return <FamiliarLevel4 />;
    } else if (item === 5) {
      return <FamiliarLevel5 />;
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
            path={`/familiar-level${item}_page`}
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

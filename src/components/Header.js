import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
  const { language, setLanguage } = useContext(Context);
  function chooseLanguage() {
    if (language === "english") {
      return <h2>English FlashCards</h2>;
    } else if (language === "chinese") {
      return <h2>Chinese FlashCards</h2>;
    } else return <h2>Spaced Repetition</h2>;
  }
  return (
    <div className="header">
      <div className="header-home">
        <Link to="/">
          <i
            className="ri-home-3-line ri-2x"
            onClick={() => setLanguage(false)}
          ></i>
        </Link>
        <h3>Home</h3>
      </div>
      {chooseLanguage()}
      <nav className="header-language">
        <Link to="/englishCard_page">
          <h3 className="header-english" onClick={() => setLanguage("english")}>
            English
          </h3>
        </Link>
        <h3>/</h3>
        <Link to="/chineseCard_page">
          <h3 className="header-chinese" onClick={() => setLanguage("chinese")}>
            Chinese
          </h3>
        </Link>
      </nav>
    </div>
  );
}

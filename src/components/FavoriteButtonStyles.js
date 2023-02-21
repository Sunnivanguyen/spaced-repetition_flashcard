import React from "react";

export default function FavoriteButtonStyles({ darkMode }) {
  return (
    <>
      <span className={`shadow ${darkMode ? "dark" : ""}`}></span>
      <span className={`edge ${darkMode ? "dark" : ""}`}></span>
      <span className={`btn-front ${darkMode ? "dark" : ""}`}>
        <i className={`ri-heart-3-fill ri-lg ${darkMode ? "dark" : ""}`}></i>
      </span>
    </>
  );
}

import React from "react";

export default function FamiliarButtonStyles({ darkMode }) {
  return (
    <>
      <span className={`shadow ${darkMode ? "dark" : ""}`}></span>
      <span className={`edge ${darkMode ? "dark" : ""}`}></span>
      <span className={`btn-front ${darkMode ? "dark" : ""}`}>
        <i class={`ri-star-fill ri-lg ${darkMode ? "dark" : ""}`}></i>
      </span>
    </>
  );
}

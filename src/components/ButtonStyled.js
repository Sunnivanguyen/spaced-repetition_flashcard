import React from "react";

export default function ButtonStyled({ btnName, darkMode }) {
  return (
    <>
      <span className={`shadow ${darkMode ? "dark" : ""}`}></span>
      <span className={`edge ${darkMode ? "dark" : ""}`}></span>
      <span className={`btn-front ${darkMode ? "dark" : ""}`}>{btnName}</span>
    </>
  );
}

import React, { useContext } from "react";
import { Context } from "../Context";

export default function HomePage() {
  const { darkMode } = useContext(Context);
  return (
    <div className={`home-container ${darkMode ? "dark" : ""}`}>
      <div className={`home-content ${darkMode ? "dark" : ""}`}>
        <p>Home Page</p>
      </div>
    </div>
  );
}

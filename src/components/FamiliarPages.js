import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
export default function FamiliarPages() {
  const { darkMode } = useContext(Context);
  const numArray = [1, 2, 3, 4, 5];
  return (
    <>
      {numArray.map((num) => {
        return (
          <div key={`to-level${num}_page`}>
            <Link to={`/familiarCards-level${num}_page`}>
              <div className={`familiar-card ${darkMode ? "dark" : ""}`}>
                <div className={`familiar-card_item ${darkMode ? "dark" : ""}`}>
                  <h1>{num}</h1>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

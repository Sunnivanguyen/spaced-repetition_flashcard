import React, { useState, useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";
export default function FamiliarItems() {
  const itemArray = [1, 2, 3, 4, 5];
  return (
    <>
      {itemArray.map((item) => {
        return (
          <Link to={`/familiar-level${item}_page`}>
            <div className="familiar-card" key={item}>
              <div className="familiar-card_item">
                <h1>{item}</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

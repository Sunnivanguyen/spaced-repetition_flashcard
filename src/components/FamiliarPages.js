import React from "react";
import { Link } from "react-router-dom";
export default function FamiliarPages() {
  const numArray = [1, 2, 3, 4, 5];
  return (
    <>
      {numArray.map((num) => {
        return (
          <div key={`to-level${num}_page`}>
            <Link to={`/familiarCards-level${num}_page`}>
              <div className="familiar-card">
                <div className="familiar-card_item">
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

import React from "react";

export default function ButtonStyled({ btnName }) {
  return (
    <>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="btn-front">{btnName}</span>
    </>
  );
}

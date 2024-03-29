import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import RankedButtons from "./RankedButtons";
import parse from "html-react-parser";

const StyledPopUpBackdrop = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  display: none;
  &.show_review-card {
    display: flex;
  }
`;
const StyledReviewCard = styled.div`
  position: absolute;
  top: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px 0 rgba(47, 47, 47, 0.25);
  height: fit-content;
  width: fit-content;
  padding: 30px 40px;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default function ReviewCard() {
  const {
    language,
    isReviewed,
    setIsReviewed,
    englishCards,
    chineseCards,
    currentCard,
    darkMode,
  } = useContext(Context);
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const [count, setCount] = useState(0);
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight + 200));
  }

  useEffect(setMaxHeight, [height, currentCard.question, currentCard.answer]);

  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  function flipCard(event) {
    event.stopPropagation();
    setFlip((prev) => !prev);
  }

  function getLeftCards() {
    let cardsLeft = [];
    if (language === "english") {
      cardsLeft = englishCards.filter((card) => card.id !== currentCard.id);
    } else if (language === "chinese") {
      cardsLeft = chineseCards.filter((card) => card.id !== currentCard.id);
    }
    return [currentCard, ...cardsLeft];
  }
  function changeCurrentCard() {
    const newArray = getLeftCards();
    for (let i = 0; i < newArray.length; i++) {
      if (i === count) {
        return newArray[i];
      }
    }
  }
  const newCurrentCard = changeCurrentCard();

  function toTheNext() {
    const newArray = getLeftCards();
    if (count >= 0 && count < newArray.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  function getBack() {
    const newArray = getLeftCards();
    if (count >= 1 && count < newArray.length) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <StyledPopUpBackdrop
      id="backdrop_review-card"
      className={isReviewed ? `show_review-card ${darkMode ? "dark" : ""}` : ""}
    >
      <StyledReviewCard
        id="popup_review-card"
        className={`popup_review_card ${darkMode ? "dark" : ""}`}
      >
        <i
          className={`ri-close-fill ri-xl ${darkMode ? "dark" : ""}`}
          onClick={() => setIsReviewed(false)}
        ></i>
        <i
          className={`ri-arrow-left-s-line ri-xl ${darkMode ? "dark" : ""}`}
          onClick={getBack}
        ></i>
        <i
          className={`ri-arrow-right-s-line ri-xl ${darkMode ? "dark" : ""}`}
          onClick={toTheNext}
        ></i>
        <div
          className={`card-reviewed ${flip ? "flip" : ""}  ${
            darkMode ? "dark" : ""
          }`}
          onClick={flipCard}
        >
          <div
            className={`card-body_reviewed ${currentCard.type}  ${
              darkMode ? "dark" : ""
            }`}
            style={{ height: height }}
          >
            <div
              className="front"
              style={{ visibility: flip ? "hidden" : "visible" }}
              ref={frontEl}
            >
              {count === 0
                ? parse(currentCard.question)
                : parse(newCurrentCard.question)}
            </div>
            <div
              className="back"
              style={{ visibility: flip ? "visible" : "hidden" }}
              ref={backEl}
            >
              {count === 0
                ? parse(currentCard.answer)
                : parse(newCurrentCard.answer)}
            </div>
          </div>
        </div>
        <RankedButtons />
      </StyledReviewCard>
    </StyledPopUpBackdrop>
  );
}

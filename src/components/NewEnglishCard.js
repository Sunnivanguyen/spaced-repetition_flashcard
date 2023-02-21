import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import NewQuestionEditor from "./NewQuestionEditor";
import NewAnswerEditor from "./NewAnswerEditor";
import ButtonStyled from "./ButtonStyled";

const StyledPopUpBackdrop = styled.div`
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  display: none;
  &.show_new-card {
    display: flex;
  }
`;
const StyledCreateCard = styled.div`
  position: absolute;
  top: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding-top: 25px;
  padding-bottom: 5px;
  padding-left: 40px;
  padding-right: 40px;
  height: fit-content;
  width: fit-content;
  background: #d62828;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export default function NewEnglishCard() {
  const {
    isCreated,
    setIsCreated,
    toAnswer,
    setToAnswer,
    createEnglishCard,
    darkMode,
  } = useContext(Context);

  function goAnswer() {
    setToAnswer(false);
  }

  function backQuestion() {
    setToAnswer(true);
  }

  function closeEnglishEditorEl() {
    setToAnswer(false);
    setIsCreated(false);
  }

  return (
    <StyledPopUpBackdrop
      id="backdrop_create-englishCard"
      className={isCreated ? `show_new-card ${darkMode ? "dark" : ""}` : ""}
    >
      <StyledCreateCard
        id="popup_create-englishCard"
        className={`popup_create-card ${darkMode ? "dark" : ""}`}
      >
        <i
          className={`ri-close-fill ri-xl ${darkMode ? "dark" : ""}`}
          onClick={closeEnglishEditorEl}
        ></i>
        <i
          className={`ri-arrow-left-s-line ri-xl ${darkMode ? "dark" : ""}`}
          onClick={() => goAnswer()}
        ></i>
        <i
          className={`ri-arrow-right-s-line ri-xl ${darkMode ? "dark" : ""}`}
          onClick={() => backQuestion()}
        ></i>
        <div className={`create-card ${darkMode ? "dark" : ""}`}>
          {toAnswer ? <NewAnswerEditor /> : <NewQuestionEditor />}
        </div>
        <div className="save-btn_box">
          <>
            <button
              className={`save-btn btn-styled ${darkMode ? "dark" : ""}`}
              onClick={createEnglishCard}
            >
              <ButtonStyled btnName={"Save"} darkMode={darkMode} />
            </button>
          </>
        </div>
      </StyledCreateCard>
    </StyledPopUpBackdrop>
  );
}

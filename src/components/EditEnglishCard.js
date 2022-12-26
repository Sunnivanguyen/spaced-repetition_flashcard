import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import UpdatedAnswerEditor from "./UpdatedAnswerEditor";
import UpdatedQuestionEditor from "./UpdatedQuestionEditor";
import ButtonStyled from "./ButtonStyled";

const StyledPopUpBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f1f185;
  left: 0;
  top: 0;
  display: none;
  &.show_edit-card {
    display: flex;
  }
`;
const StyledEditCard = styled.div`
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

export default function EditEnglishCard() {
  const {
    isEdited,
    setIsEdited,
    toAnswer,
    setToAnswer,
    updatedAnswer,
    updatedQuestion,
    setEnglishCards,
    currentEnglishCardId,
  } = useContext(Context);

  function updateEnglishCard(event) {
    event.stopPropagation();
    setIsEdited(false);
    console.log(updatedQuestion);
    setEnglishCards((oldCards) =>
      oldCards.map((oldCard) =>
        oldCard.id === currentEnglishCardId
          ? { ...oldCard, question: updatedQuestion, answer: updatedAnswer }
          : oldCard
      )
    );
  }

  function closeEnglishEditorEl() {
    setToAnswer(false);
    setIsEdited(false);
  }

  return (
    <StyledPopUpBackdrop
      id="backdrop_edit-englishCard"
      className={isEdited ? "show_edit-card" : ""}
    >
      <StyledEditCard id="popup_edit-englishCard">
        <i className="ri-close-fill ri-xl" onClick={closeEnglishEditorEl}></i>
        <i
          className="ri-arrow-left-s-line ri-xl"
          onClick={() => setToAnswer(false)}
        ></i>
        <i
          className="ri-arrow-right-s-line ri-xl"
          onClick={() => setToAnswer(true)}
        ></i>
        <div className="editor">
          {toAnswer ? <UpdatedAnswerEditor /> : <UpdatedQuestionEditor />}
        </div>
        <div className="save-btn_box">
          <>
            <button
              className="save-btn btn-styled"
              onClick={(e) => updateEnglishCard(e)}
            >
              <ButtonStyled btnName={"Save"} />
            </button>
          </>
        </div>
      </StyledEditCard>
    </StyledPopUpBackdrop>
  );
}

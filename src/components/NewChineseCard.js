import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import NewQuestionEditor from "./NewQuestionEditor";
import NewAnswerEditor from "./NewAnswerEditor";
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
  &.show_new-card {
    display: flex;
  }
`;
const StyledCreateCard = styled.div`
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
export default function NewChineseCard() {
  const { isCreated, setIsCreated, toAnswer,setToAnswer, createChineseCard } =
    useContext(Context);

  function closeChineseEditorEl() {
    setToAnswer(false);
    setIsCreated(false);
  }

  return (
    <StyledPopUpBackdrop
      id="backdrop_create-chineseCard"
      className={isCreated ? "show_new-card" : ""}
    >
      <StyledCreateCard id="popup_create-chineseCard">
        <i className="ri-close-fill ri-xl" onClick={closeChineseEditorEl}></i>
        <i
          className="ri-arrow-left-s-line ri-xl"
          onClick={() => setToAnswer(false)}
        ></i>
        <i
          className="ri-arrow-right-s-line ri-xl"
          onClick={() => setToAnswer(true)}
        ></i>
        <div className="create-card">
          {toAnswer ? <NewAnswerEditor /> : <NewQuestionEditor />}
        </div>
        <div className="save-btn_box">
          <>
            <button className="save-btn btn-styled" onClick={createChineseCard}>
              <ButtonStyled btnName={"Save"} />
            </button>
          </>
        </div>
      </StyledCreateCard>
    </StyledPopUpBackdrop>
  );
}

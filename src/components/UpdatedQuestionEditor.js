import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
export default function UpdatedQuestionEditor() {
  const { setUpdatedQuestion, currentCard } = useContext(Context);
  const placeholder = "Question";
  const { quill, quillRef } = useQuill({
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(`<p>${currentCard.question}</p>`);
      quill.on("text-change", (delta, oldDelta, source) => {
        setUpdatedQuestion(quill.getText());
      });
    }
  }, [quill, setUpdatedQuestion, currentCard]);
  return (
    <>
      <div className="question">
        <div ref={quillRef} />
      </div>
    </>
  );
}

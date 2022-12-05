import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
export default function UpdatedAnswerEditor() {
  const { setUpdatedAnswer, currentCard } = useContext(Context);
  const placeholder = "Answer";
  const { quill, quillRef } = useQuill({
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(`<p>${currentCard.answer}</p>`);
      quill.on("text-change", (delta, oldDelta, source) => {
        setUpdatedAnswer(quill.getText());
      });
    }
  }, [quill, setUpdatedAnswer, currentCard]);
  return (
    <>
      <div className="answer">
        <div ref={quillRef} />
      </div>
    </>
  );
}

import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
export default function NewQuestionEditor() {
  const { question, setQuestion } = useContext(Context);
  const placeholder = "Question";

  const { quill, quillRef } = useQuill({
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setQuestion(quill.root.innerHTML);
      });
    }
  }, [quill, setQuestion]);

  if (quill) {
    const text = quill.getText();
    quill.clipboard.dangerouslyPasteHTML(text.length, text);
  }

  return (
    <>
      <div className="question">
        <div ref={quillRef} />
      </div>
    </>
  );
}

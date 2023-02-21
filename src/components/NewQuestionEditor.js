import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
export default function NewQuestionEditor() {
  const { preQuestion, setPreQuestion } = useContext(Context);
  const placeholder = "Question";

  const { quill, quillRef } = useQuill({
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setPreQuestion(quill.root.innerHTML);
      });
    }
  }, [quill, preQuestion, setPreQuestion]);

  return (
    <>
      <div className="question">
        <div ref={quillRef} />
      </div>
    </>
  );
}

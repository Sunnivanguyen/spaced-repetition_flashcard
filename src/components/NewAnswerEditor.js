import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function NewAnswerEditor() {
  const { answer, setAnswer } = useContext(Context);
  const placeholder = "Answer";
  const { quill, quillRef } = useQuill({
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setAnswer(quill.root.innerHTML);
      });
    }
  }, [quill, answer, setAnswer]);
  return (
    <>
      <div className="answer">
        <div ref={quillRef} />
      </div>
    </>
  );
}

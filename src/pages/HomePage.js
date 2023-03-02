import React, { useContext } from "react";
import { Context } from "../Context";

export default function HomePage() {
  const { darkMode } = useContext(Context);
  return (
    <div className={`home-container ${darkMode ? "dark" : ""}`}>
      <div className={`home-content ${darkMode ? "dark" : ""}`}>
        <h2>What Is Spaced Repetition?</h2>
        <p>
          Before learning about spaced repetition systems, it's important to
          understand how our brains work.In order for us to retain any
          information in our brain, we have to refresh it periodically with
          specific time intervals. For example, let's say you hear that “Ottawa
          is the capital of Canada.” If you're not using that information at
          all, you will likely forget about it after you finish reading this
          article or sometime later. However, if you continue to “learn” that
          Ottawa is the capital of Canada through text or you explaining this,
          you'll better retain this information. The point is:
        </p>
        <h3>
          The more often you encounter certain bits of info, the less often
          you'll need to refresh your memory of it.
        </h3>
        <p>
          What makes our brains so interesting, though, is that even long-held
          pieces of information can be forgotten if we don't run into it enough.
          For example, people moving to another country can forget or have
          difficulty speaking their own native language if they're not exposed
          to enough of it in the new country. With that understanding, spaced
          repetition is based entirely on these principles. It's the idea of
          reviewing information at gradually increasing intervals.
        </p>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { GlobalState } from "../../App";
import styles from "./SpeechBtn.module.scss";

const SpeechBtn = () => {
  const { inputVal } = useContext(GlobalState);

  const speechUtterence = new SpeechSynthesisUtterance();
  speechUtterence.lang = "US-en";

  const speakAtc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (inputVal === "") {
      return;
    }
    Speak();
    TextOporation();
  };

  const Speak = () => {
    speechUtterence.text = inputVal;
    speechSynthesis.speak(speechUtterence);
  };

  const TextOporation = () => {
    const element = document.getElementById("resultsArea");
    element!.innerHTML = inputVal;
  };

  return (
    <div>
      <button className={styles.speatBtn} onClick={speakAtc}>
        Speak
      </button>
    </div>
  );
};

export default SpeechBtn;

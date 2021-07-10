import React, { useContext } from "react";
import { GlobalState } from "../../App";
import styles from "./SpeechBtn.module.scss";

const SpeechBtn = () => {
  const { inputVal, selectedVoice, rate, pitch } = useContext(GlobalState);

  const speechUtterence = new SpeechSynthesisUtterance();

  const speakAtc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (inputVal === "") {
      return;
    }
    Speak();
    TextOporation();
  };

  const Speak = () => {
    speechUtterence.rate = rate;
    speechUtterence.pitch = pitch;
    speechUtterence.text = inputVal;
    speechUtterence.lang = selectedVoice.voiceLang;
    speechSynthesis.getVoices().map((voice) => {
      if (voice.name === selectedVoice.voiceName) {
        speechUtterence.voice = voice;
      }
    });
    speechSynthesis.speak(speechUtterence);
    console.log(selectedVoice);
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

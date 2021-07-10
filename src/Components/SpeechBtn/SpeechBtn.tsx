import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../App";
import styles from "./SpeechBtn.module.scss";

const SpeechBtn = () => {
  const { inputVal, selectedVoice, rate, pitch } = useContext(GlobalState);

  let currentSnetence = -1;
  let textHighlight = "";

  const speechUtterence = new SpeechSynthesisUtterance();

  speechUtterence.addEventListener("boundary", (e) => {
    let textArray = inputVal.split("");
    let currentWord = textArray.splice(e.charIndex, e.charLength).join("");

    if (currentWord === "") {
      currentSnetence = ++currentSnetence;
      highlightCurrentSentence();
    } else {
      highlightCurrentWord(e.charIndex, e.charLength, currentWord);
      console.log(currentWord);
    }
  });
  speechUtterence.addEventListener("end", (e) => {
    currentSnetence = -1;
  });

  const highlightCurrentSentence = () => {
    const textArray = inputVal.split(".");
    let initPart = textArray.slice(0, currentSnetence);
    let middlePart: string[] = [];
    if (currentSnetence === 0) {
      middlePart.push(
        `<span class="sentenceHighlight">${textArray[currentSnetence]}</span>`
      );
    } else {
      middlePart.push(
        `<span class="sentenceHighlight">${textArray[currentSnetence]}</span>`
      );
    }

    let lastPart = textArray.splice(currentSnetence + 1, textArray.length - 1);
    let combined = [...initPart, ...middlePart, ...lastPart];
    textHighlight = combined.join(".");
    TextOporation(textHighlight);
  };

  const highlightCurrentWord = (
    index: number,
    length: number,
    currentWord: string
  ) => {
    const textArray = textHighlight.split("");
    let initPart = textArray.slice(0, index + 32);
    let middlePart = [`<span class="wordHighlight">${currentWord}</span>`];
    let lastPart = textArray.slice(index + 32 + length, textArray.length - 1);
    let combined = [...initPart, ...middlePart, ...lastPart];
    // debugger;
    TextOporation(combined.join(""));
  };

  const speakAtc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (inputVal === "") {
      return;
    }
    Speak();
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
  };

  const TextOporation = (insertHTML: string) => {
    const element = document.getElementById("resultsArea");
    element!.innerHTML = insertHTML;
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

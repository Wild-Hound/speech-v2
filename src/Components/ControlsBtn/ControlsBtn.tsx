import React from "react";
import styles from "./ControlsBtn.module.scss";

const ControlsBtn = () => {
  const pauseSpeech = () => {
    if (!speechSynthesis.paused) {
      speechSynthesis.pause();
    }
  };

  const resumeSpeech = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
    }
  };

  const stopSpeech = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  return (
    <div className={styles.btnContainer}>
      <button
        className={`${styles.controlBtn} ${styles.pause}`}
        onClick={pauseSpeech}
      >
        Pause
      </button>
      <button
        className={`${styles.controlBtn} ${styles.resume}`}
        onClick={resumeSpeech}
      >
        Resume
      </button>
      <button
        className={`${styles.controlBtn} ${styles.stop}`}
        onClick={stopSpeech}
      >
        Stop
      </button>
    </div>
  );
};

export default ControlsBtn;

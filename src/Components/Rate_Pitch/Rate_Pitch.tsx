import React, { useContext } from "react";
import { GlobalState } from "../../App";
import styles from "./Rate_Pitch.module.scss";

const Rate_Pitch = () => {
  const { rate, setRate, pitch, setPitch } = useContext(GlobalState);

  const chngVal = (
    e: React.ChangeEvent<HTMLInputElement>,
    func: React.Dispatch<React.SetStateAction<number>>
  ) => {
    func(parseFloat(e.target.value));
  };

  return (
    <div className={styles.sliderGroup}>
      <span className={styles.sliderWrapper}>
        <span className={styles.sliderMeta}>
          <label htmlFor="rate">Rate:</label>
          <p>{rate}</p>
        </span>
        <input
          type="range"
          id="rate"
          className={styles.sliderInput}
          min={0.5}
          max={2}
          step={0.1}
          value={rate}
          onChange={(e) => chngVal(e, setRate)}
        />
      </span>
      <span className={styles.sliderWrapper}>
        <span className={styles.sliderMeta}>
          <label htmlFor="pitch">Pitch:</label>
          <p>{pitch}</p>
        </span>
        <input
          type="range"
          id="pitch"
          min={0.1}
          max={2}
          step={0.1}
          value={pitch}
          onChange={(e) => chngVal(e, setPitch)}
          className={styles.sliderInput}
        />
      </span>
    </div>
  );
};

export default Rate_Pitch;

import React from "react";
import styles from "./SelectionArea.module.scss";

const SelectionArea = () => {
  return (
    <div>
      <select name="voices" id="voices" className={styles.voices}>
        <option value="Hello World" className={styles.option}>
          Hello World
        </option>
        <option value="Hello World" className={styles.option}>
          Hello World
        </option>
        <option value="Hello World" className={styles.option}>
          Hello World
        </option>
      </select>
    </div>
  );
};

export default SelectionArea;

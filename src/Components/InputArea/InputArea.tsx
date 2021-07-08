import React, { useContext } from "react";
import { GlobalState } from "../../App";
import styles from "./InputArea.module.scss";

const InputArea = () => {
  const { inputVal, setInputVal } = useContext(GlobalState);

  return (
    <div>
      <textarea
        placeholder="Type Here..."
        className={styles.inputArea}
        id="inputArea"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
    </div>
  );
};

export default InputArea;

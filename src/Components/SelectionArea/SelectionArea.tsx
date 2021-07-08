import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../App";
import styles from "./SelectionArea.module.scss";

const SelectionArea = () => {
  const [voices, setVoice] = useState<SpeechSynthesisVoice[]>();

  const { setSelectedVoice } = useContext(GlobalState);

  useEffect(() => {
    setVoice(speechSynthesis.getVoices());
  }, [speechSynthesis.onvoiceschanged]);

  const selectVoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const temp = e.target.value.split(",");
    setSelectedVoice({
      voiceName: temp[0],
      voiceLang: temp[1],
    });
  };

  return (
    <div>
      <select
        name="voices"
        id="voices"
        onChange={selectVoice}
        className={styles.voices}
      >
        {voices?.map((voice) => {
          return (
            <option
              value={`${voice.name},${voice.lang}`}
            >{`${voice.name} (${voice.lang})`}</option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectionArea;

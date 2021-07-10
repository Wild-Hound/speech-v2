import React, { createContext, useState } from "react";
import InputArea from "./Components/InputArea/InputArea";
import SpeechBtn from "./Components/SpeechBtn/SpeechBtn";
import ResultsArea from "./Components/ResultsArea/ResultsArea";
import SelectionArea from "./Components/SelectionArea/SelectionArea";
import ControlsBtn from "./Components/ControlsBtn/ControlsBtn";
import Rate_Pitch from "./Components/Rate_Pitch/Rate_Pitch";
import "./App.scss";

interface contetxtInterface {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  selectedVoice: {
    voiceName: string;
    voiceLang: string;
  };
  setSelectedVoice: React.Dispatch<
    React.SetStateAction<{ voiceName: string; voiceLang: string }>
  >;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
  pitch: number;
  setPitch: React.Dispatch<React.SetStateAction<number>>;
}

// @ts-ignore
export const GlobalState = createContext<contetxtInterface>();

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectedVoice, setSelectedVoice] = useState({
    voiceName: "",
    voiceLang: "",
  });
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  return (
    <GlobalState.Provider
      value={{
        inputVal,
        setInputVal,
        selectedVoice,
        setSelectedVoice,
        rate,
        setRate,
        pitch,
        setPitch,
      }}
    >
      <div className="App">
        <div className="container">
          <InputArea />
          <Rate_Pitch />
          <SelectionArea />
          <ControlsBtn />
          <SpeechBtn />
          <ResultsArea />
        </div>
      </div>
    </GlobalState.Provider>
  );
}

export default App;

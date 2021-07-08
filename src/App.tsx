import React, { createContext, useState } from "react";
import InputArea from "./Components/InputArea/InputArea";
import SpeechBtn from "./Components/SpeechBtn/SpeechBtn";
import ResultsArea from "./Components/ResultsArea/ResultsArea";
import SelectionArea from "./Components/SelectionArea/SelectionArea";
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
}

// @ts-ignore
export const GlobalState = createContext<contetxtInterface>();

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectedVoice, setSelectedVoice] = useState({
    voiceName: "",
    voiceLang: "",
  });

  return (
    <GlobalState.Provider
      value={{ inputVal, setInputVal, selectedVoice, setSelectedVoice }}
    >
      <div className="App">
        <div className="container">
          <InputArea />
          <SelectionArea />
          <SpeechBtn />
          <ResultsArea />
        </div>
      </div>
    </GlobalState.Provider>
  );
}

export default App;

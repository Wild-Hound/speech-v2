import React, { createContext, useState } from "react";
import InputArea from "./Components/InputArea/InputArea";
import SpeechBtn from "./Components/SpeechBtn/SpeechBtn";
import ResultsArea from "./Components/ResultsArea/ResultsArea";
import SelectionArea from "./Components/SelectionArea/SelectionArea";
import "./App.scss";

interface contetxtInterface {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
}

// @ts-ignore
export const GlobalState = createContext<contetxtInterface>();

function App() {
  const [inputVal, setInputVal] = useState("");

  return (
    <GlobalState.Provider value={{ inputVal, setInputVal }}>
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

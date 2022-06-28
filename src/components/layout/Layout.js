import React, { createContext, useState } from "react";
import Main from "./Main";
export const pageNameContext = createContext();

export default function Layout() {
  const pageNameState = useState();
  const navBarState = useState(false);
  const [RoundNumber, setRoundNumber] = useState(1)
    const [DailyStoppingDistance, setDailyStoppingDistance] = useState(0)
  return (
    <div className="Layout">
      <pageNameContext.Provider value={{pageNameState, RoundNumber,setRoundNumber,DailyStoppingDistance,setDailyStoppingDistance }}>
        <Main />
      </pageNameContext.Provider>
    </div>
  );
}

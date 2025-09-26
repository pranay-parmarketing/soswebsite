import { createContext, useRef, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const url = `https://api.singledebt.in`;
  //
  const contentsRef = useRef();
  const refreshButtonRef = useRef();
  //
  const [source, setSource] = useState("");
  return (
    <AppContext
      value={{ url, contentsRef, refreshButtonRef, source, setSource }}
    >
      {children}
    </AppContext>
  );
};

export { AppContext, AppContextProvider };

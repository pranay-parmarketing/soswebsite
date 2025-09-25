import { createContext, useRef, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const url = `https://api.singledebt.in`;
  const contentsRef = useRef();
  const [source, setSource] = useState("");
  return (
    <AppContext value={{ url, contentsRef, source, setSource }}>
      {children}
    </AppContext>
  );
};

export { AppContext, AppContextProvider };

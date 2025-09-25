import { createContext, useRef, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const url = `http://localhost:8888`;
  const contentsRef = useRef();
  const [source, setSource] = useState("");
  return (
    <AppContext value={{ url, contentsRef, source, setSource }}>
      {children}
    </AppContext>
  );
};

export { AppContext, AppContextProvider };

import { createContext, useRef } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const contentsRef = useRef();
  return <AppContext value={{ contentsRef }}>{children}</AppContext>;
};

export { AppContext, AppContextProvider };

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RefreshButton = () => {
  const { refreshButtonRef } = useContext(AppContext);
  const refreshButton = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };
  return (
    <button
      className="button refresh-video d-none"
      onClick={refreshButton}
      ref={refreshButtonRef}
    >
      Play Video again
    </button>
  );
};

export default RefreshButton;

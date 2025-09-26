import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPlay } from "react-icons/fa";

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
      <FaPlay />
    </button>
  );
};

export default RefreshButton;

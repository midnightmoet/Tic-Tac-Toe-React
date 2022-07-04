import React from "react";
import "./ResetButton.css";

export const ResetButton = ({ resetBoard }) => {
  return (
    <button className="resetBtn" onClick={resetBoard}>
      Reset
    </button>
  );
};

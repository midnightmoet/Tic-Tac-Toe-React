import React from "react";
import "./ScoreBoard.css";

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score xScore ${!xPlaying && "inactive"}`}>
        X - {xScore}{" "}
      </span>{" "}
      <span className={`score oScore ${xPlaying && "inactive"}`}>
        O - {oScore}{" "}
      </span>{" "}
    </div>
  );
};

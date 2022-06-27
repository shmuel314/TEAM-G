import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./style.module.css";

const renderTime = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime - minutes * 60;

  return (
    <div className="timer">
      <div className="value">
        {minutes}:{seconds}
      </div>
    </div>
  );
};

function Clock() {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={180}
        colors={["#7D56A5"]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Clock;

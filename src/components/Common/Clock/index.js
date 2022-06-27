import React from "react";
import ReactDOM from "react-dom";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
import { useState } from "react";
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
  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({ isPlaying: false, colors: "#abc" });
  const [play, setPlay] = useState(false);

  // if (play)

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

  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}

export default Clock;

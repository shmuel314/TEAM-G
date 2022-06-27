import React from "react";
import ReactDOM from "react-dom";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
import { useState } from "react";
import styles from "./style.module.css";
import SquareButton from "../squareButton";
import RoundedButton from "../RoundedButton";

// Creator : Team H - Milka

//instructions: when you use this component you should
//  send a props named "freeStyle" with a value:false.

function Clock(props) {
  const [play, setPlay] = useState(false);
  let freeStyle = true; //Todo: change to props.freeStyle
  const [rapid, setRapid] = useState(0);

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;
    return (
      <div className="timer">
        {freeStyle ? (
          <SquareButton>{rapid} LPM</SquareButton>
        ) : (
          <div className={styles.value}>
            {minutes < 10 && 0}
            {minutes}:{seconds < 10 && 0}
            {seconds}
          </div>
        )}
        <div className={styles.playPause}>
          <RoundedButton></RoundedButton>
        </div>
      </div>
    );
  };

  return (
    <>
      {freeStyle && <button onClick={() => setRapid(rapid + 2)}>+</button>}
      <div>
        <CountdownCircleTimer
          isPlaying={play}
          duration={180}
          colors={["#FEEFEC"]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          trailColor={"#7D56A5"}
          strokeLinecap={"square"}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      {freeStyle && <button onClick={() => setRapid(rapid - 2)}>-</button>}
    </>
  );

  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}

export default Clock;

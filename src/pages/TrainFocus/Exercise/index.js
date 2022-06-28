import { useContext, useState } from "react";
import { pageNameContext } from "../../../components/layout/Layout.js";
// import "./style.css";
// import arow from "./arow.png";
import { useNavigate } from "react-router-dom";
import SabmitBtn from "../../../components/common/SubmitBtn";

function Exercise() {
  const { RoundNumber, setDailyStoppingDistance, DailyStoppingDistance } =
    useContext(pageNameContext);
  const navigate = useNavigate();
  const StoppingDistance = 3;
  const side = 1;

  function Round() {
    if (RoundNumber === 4) {
      setDailyStoppingDistance(DailyStoppingDistance / 4);
      navigate("/train-focus/result", { RoundNumber });
    } else {
      setDailyStoppingDistance(DailyStoppingDistance + StoppingDistance);
      navigate("/train-focus/StartFocus");
    }
  }

  switch (side) {
    case 0:
      return (
        <>
          <div className="purpleDot"></div>
          <div className="bo">
            <SabmitBtn
              name="stop"
              path="/train-focus/StartFocus"
              onclick={Round}
            />
          </div>
        </>
      );
      break;
    case 1:
      return (
        <>
          <div className="purpleDot"></div>
          <div className="back_center_Left">
            {" "}
            <div className="text_box">
              Move the phone a bit to the left so the dot is in your center
            </div>
            {/* <img className="flip_img_left" src={arow} alt="img" /> */}
          </div>
          <SabmitBtn
            name="stop"
            path="/train-focus/StartFocus"
            onclick={Round}
          />
        </>
      );
      break;
    case -1:
      return (
        <>
          <div className="purpleDot"></div>
          <div className="back_center_Right">
            {" "}
            <div className="text_box">
              Move the phone a bit to the right so the dot is in your center
            </div>
            {/* <img className="flip_img_right" src={arow} alt="img" /> */}
          </div>
          <SabmitBtn
            name="stop"
            path="/train-focus/StartFocus"
            onclick={Round}
          />
        </>
      );
      break;
    default:
      break;
  }
}

export default Exercise;

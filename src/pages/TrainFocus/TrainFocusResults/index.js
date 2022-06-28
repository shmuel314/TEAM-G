import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubmitBtn from "../../../components/common/SubmitBtn";
import "./mosheModels.css";
import image from "./Resuil vector.png";
import image2 from "./Group 287 (1).png";

import ReatingAndScore from "../../../components/common/ReatingAndScore";
import { pageNameContext } from "../../../components/layout/Layout";

// Creator : Team G - Shmuel
function Results(props) {
  // const [setPageName] = useContext(pageNameContext)}
  // setPageName("Result Summary");
  const avg = 9;
  const { DailyStoppingDistance, setDailyStoppingDistance } =
    useContext(pageNameContext);
  const testNum = 5;
  const [totalAvg, setTotalAvg] = useState();
  useEffect(() => {
    setTotalAvg(((avg + DailyStoppingDistance) / (testNum + 1)).toFixed(1));
  }, [DailyStoppingDistance]);
  const updateDB = () => {
    console.log("fhdgfjhdf");
    setDailyStoppingDistance(0);
  };

  return (
    <>
      <img className="train-focus-result-image" src={image} alt="img"></img>
      <div className="train-focus-rectangle1">
        <div className="train-focus-image2">
          <img src={image2}></img>
        </div>
        <h5 className="train-focus-text">Comfortable Reading</h5>
        <span className="train-focus-avg">
          <b>{totalAvg} cm</b>
        </span>
      </div>

      <SubmitBtn
        className="btn"
        path="/train-focus/CalibrateCam"
        name="Done"
        onclick={updateDB}
      />
    </>
  );
}

export default Results;

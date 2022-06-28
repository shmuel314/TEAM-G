import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubmitBtn from "../../../components/common/SubmitBtn";
import "./mosheModels.css";
import image from "./Resuil vector.png";
import image2 from "./Vector (1).png";
import image4 from "./Vector (4).png";
// import image3 from "./Vector (3).png";
import image3 from "./Line 237 (Stroke).png";
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
    // setTotalAvg(((avg + DailyStoppingDistance) / (testNum + 1)).toFixed(1));
    setTotalAvg(DailyStoppingDistance) 
  }, [DailyStoppingDistance]);
  const updateDB = () => {
    console.log("fhdgfjhdf");
    setDailyStoppingDistance(0);
  };

  return (
    <>
      <img className="train-focus-result-image" src={image} alt="img"></img>
      <div className="rectangle1">
        <div className="image2">
          <img className="train-focus-mobile" src={image2}></img>
          <img className="train-focus-arrow" src={image3}></img>
          <div className="train-focus-person">
            <span className="train-focus-circle"></span>
            <img src={image4}></img>
          </div>
        </div>
        <h5 className="text">Comfortable Reading</h5>
        <span className="avg">
          <b>{totalAvg} </b>
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

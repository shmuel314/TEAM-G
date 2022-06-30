import { useContext, useEffect, useState } from "react";
import SubmitBtn from "../../../components/common/SubmitBtn";
import "./mosheModels.css";
import image from "./Resuil vector.png";
import image2 from "./Group 287 (1).png";
// import '../../../../GlobalStyle.css'
import ReatingAndScore from "../../../components/common/ReatingAndScore";
import { pageNameContext } from "../../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

// Creator : Team G - Shmuel
function Results() {
  const navigate = useNavigate()
  // const [setPageName] = useContext(pageNameContext)}
  // setPageName("Result Summary");
  const { DailyStoppingDistance, setDailyStoppingDistance, setRoundNumber,setPageName,setShowHeader } =
    useContext(pageNameContext);
  const updateDB = () => {
    navigate('/train-focus/StartFocus')
    console.log("fhdgfjhdf");
    setDailyStoppingDistance(0);
    setRoundNumber(1);
  };
  useEffect(()=>{
    setShowHeader(true)
  })
  useEffect(()=>{
    setPageName("summary result")
  },[])

  return (
    <>
      <img className="train-focus-result-image" src={image} alt="img"></img>
      <div className=" back-purple left train-focus-rectangle1 ">
        <div className="train-focus-image2">
          <img src={image2}></img>
        </div>
        <h5 className="train-focus-text">Comfortable Reading</h5>
        <span className="train-focus-avg">
          <b>{DailyStoppingDistance.toFixed(1)} cm</b>
        </span>
      </div>

      <SubmitBtn
type = "button"
name="Done"
        click={updateDB}
      />
    </>
  );
}

export default Results;

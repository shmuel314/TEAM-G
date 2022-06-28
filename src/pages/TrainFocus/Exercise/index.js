import UmooveApi from "../../../components/api/UmooveApi";
import { useContext, useState } from 'react'
import { pageNameContext } from "../../../components/layout/Layout.js"
import "./style.css"
// import arow from "./arow.png"
import { useNavigate } from 'react-router-dom'
import SabmitBtn from '../../../components/common/SubmitBtn'


  function Exercise() {
   
    const { RoundNumber, setDailyStoppingDistance, DailyStoppingDistance } = useContext(pageNameContext)
    const [StoppingDistance , setStoppingDistance ] = useState(0);
    const side = 1


    function Round() {
      if (RoundNumber === 5) {
        const distance = UmooveApi.API_getDistance()
        setDailyStoppingDistance((DailyStoppingDistance + distance)/4)
        // setDailyStoppingDistance(DailyStoppingDistance / 4)
        UmooveApi.API_stopUmoove()
        console.log(UmooveApi.API_getDistance());
        console.log(DailyStoppingDistance);
      }
      else {
        const distance = UmooveApi.API_getDistance()
        // setStoppingDistance(UmooveApi.API_getDistance())
        console.log(distance);
        setDailyStoppingDistance(DailyStoppingDistance + distance)
        console.log(DailyStoppingDistance);
      }
    }
    localStorage.setItem("posX", 200); // ה200 הוא פייק. לקבל משתנה מאורית
    switch (side) {
      case 0:
        return <>
          <div className="purpleDot" style={{ left: localStorage.getItem("posX") + "px" }}></div>
          <div className="bo">
            <SabmitBtn name="stop" path={RoundNumber < 5 ? '/train-focus/StartFocus' : '/train-focus/result'} onclick={Round} />
          </div>
        </>
        break;
      case 1:
        return <>
          <div className="purpleDot" style={{ left: localStorage.getItem("posX") + "px" }}></div>
          <div className="back_center_Left"> <div className="text_box">Move the phone a bit to the left so the dot is in your center</div>
            {/* <img  className="flip_img_left"src={arow} alt="img"/> */}
          </div>
          <SabmitBtn name="stop" path={RoundNumber < 5 ? '/train-focus/StartFocus' : '/train-focus/result'} onclick={Round} />
        </>
        break;
      case -1:
        return <>
          <div className="purpleDot" style={{ left: localStorage.getItem("posX") + "px" }}></div>
          <div className="back_center_Right"> <div className="text_box">Move the phone a bit to the right so the dot is in your center</div>
            {/* <img  className="flip_img_right"src={arow} alt="img"/> */}
          </div>
          <SabmitBtn name="stop" path={RoundNumber < 5 ? '/train-focus/StartFocus' : '/train-focus/result'} onclick={Round} />
        </>
        break;
      default:
        break;

    }


  }


export default Exercise

import UmooveApi from "../../../components/api/UmooveApi";
import { useContext, useEffect, useState } from 'react'
import { pageNameContext } from "../../../components/layout/Layout.js"
import "./style.css"
import arow from "../../../assets/img/logo/Group 295.png"
import { Navigate, useNavigate } from 'react-router-dom'
import SabmitBtn from '../../../components/common/SubmitBtn'


  function Exercise() {
    const navigate=useNavigate()
    const [side,setSide] = useState(0)
    const { RoundNumber, setDailyStoppingDistance, DailyStoppingDistance } = useContext(pageNameContext)
    const [StoppingDistance , setStoppingDistance ] = useState(0);
    const cameraPosX = localStorage.getItem("cameraPosX");


    function Round() {
      if (RoundNumber === 5) {
        const distance = UmooveApi.API_getDistance()
        setDailyStoppingDistance((DailyStoppingDistance + distance)/4)
        // setDailyStoppingDistance(DailyStoppingDistance / 4)
        // UmooveApi.API_stopUmoove()
        navigate('/train-focus/result')
        console.log(UmooveApi.API_getDistance());
        console.log(DailyStoppingDistance);
      }
      else {
        const distance = UmooveApi.API_getDistance()
        const avgDistance = setInterval(()=>{
          setStoppingDistance(distance)
        },30)
        console.log(distance);
        // setStoppingDistance(UmooveApi.API_getDistance())
        setDailyStoppingDistance(DailyStoppingDistance + distance)
        console.log(DailyStoppingDistance);
        navigate('/train-focus/StartFocus')
      }
    }

    useEffect(()=>{
      const toCenterlize = 
        setInterval(()=>{
         setSide(UmooveApi.API_getAlignment())
        },10)
      
    },[])

    
    
    switch (side) {
      case 0:
        return <>
          <div className="purpleDot" style={{ left: cameraPosX + "px" }}></div>
          <div className="bo">
            <SabmitBtn name="stop" type = "button" click={Round} />
          </div>
        </>
        break;
      case 1:
        return <>
          <div className="purpleDot" style={{ left: cameraPosX + "px" }}></div>
          <div className="back_center_Left"> <div className="text_box">Move the phone a bit to the left so the dot is in your center</div>
            <img  className="flip_img_left"src={arow} alt="img"/>
          </div>
          <SabmitBtn name="stop"  type = "button" click={Round} />
        </>
        break;
      case -1:
        return <>
          <div className="purpleDot" style={{ left: cameraPosX + "px" }}></div>
          <div className="back_center_Right"> <div className="text_box">Move the phone a bit to the right so the dot is in your center</div>
            <img  className="flip_img_right"src={arow} alt="img"/>
          </div>
          <SabmitBtn name="stop" type = "button" click={Round} />
        </>
        break;
      default:
        break;

    }


  }


export default Exercise
